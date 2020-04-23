#!/bin/bash

set -e

# Install Certbot
# sudo rm -rf /opt/eff.org/*
# wget https://dl.eff.org/certbot-auto
# sudo chmod a+x certbot-auto

certbot_default=/opt/letsencrypt
read -p "letsencrypt-auto loc (default: ${certbot_default}): " certbot
certbot="${certbot:-${certbot_default}}"

read -p "project root loc (default: $(pwd)): " root
root="${root:-$(pwd)}"

default_domain="localhost"
read -p "domain name (default: $default_domain): " domain
domain="${domain:-$default_domain}"

out_default=/etc/letsencrypt/live/${domain}
read -p "key/cert output loc (default: ${out_default}): " out
out="${out:-${out_default}}"
if [ ! -d ${out} ]
then
    sudo mkdir -p ${out}
fi

if [ ! -f $HOME/.bash_profile ]; then
    touch $HOME/.bash_profile
fi

read -p "=== Generate cert? (y/n) === " yn
case $yn in
    [Yy]* )
        if [[ "$OSTYPE" == "linux-gnu" ]];
        then
            sudo ${certbot}/certbot-auto certonly -d $domain --standalone --debug
        elif [[ "$OSTYPE" == "darwin"* ]];
        then
            if ! hash openssl 2>/dev/null
            then
                echo "Installing openssl"
                brew update
                brew install openssl
                export PATH="/usr/local/opt/openssl/bin:$PATH"
                echo 'export PATH="/usr/local/opt/openssl/bin:$PATH"' >> ~/.bash_profile
            fi

            sudo openssl genrsa -out ${out}/privkey.pem 2048
            sudo openssl req -new -x509 -key ${out}/privkey.pem -out ${out}/fullchain.pem -days 3650 -subj /CN=localhost
            sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ${out}/fullchain.pem
        else
            #  Other platforms currently not supported in the script.
            echo "Platform ${OSTYPE} not supported."
        fi
        break;;
    [Nn]* ) exit;;
    * ) exit;;
esac

echo "export SSL_CERT_FILE=${out}/fullchain.pem"
if [ ! $SSL_CERT_FILE == ${out}/fullchain.pem ]
then
    echo "export SSL_CERT_FILE=${out}/fullchain.pem" >> $HOME/.bash_profile
    export SSL_CERT_FILE=${out}/fullchain.pem
fi

echo "export SSL_KEY_FILE=${out}/privkey.pem"
if [ ! $SSL_KEY_FILE == ${out}/privkey.pem ]
then
    export SSL_KEY_FILE=${out}/privkey.pem
fi

echo "========================="
echo "certbot: ${certbot}"
echo "project root: ${root}"
echo "domain: ${domain}"

source $HOME/.bash_profile

if ! hash firebase 2>/dev/null
then
    echo "firebase not installed"
    sudo npm install -g firebase-tools
fi

sudo iptables -t nat -I PREROUTING -p tcp --dport 443 -j REDIRECT --to-ports 9080
sudo iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8080

if [[ -f "$GOOGLE_APPLICATION_CREDENTIALS" ]]; then
    echo "GOOGLE_APPLICATION_CREDENTIALS: ${GOOGLE_APPLICATION_CREDENTIALS}"
else
    read -p "GOOGLE_APPLICATION_CREDENTIALS (default: ${HOME}): " gccred
    gccred="{gccred:-${HOME}}"
fi

