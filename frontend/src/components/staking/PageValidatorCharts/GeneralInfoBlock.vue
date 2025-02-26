<template>
  <div class="card-white validator-info">
    <ul class="row">
      <li class="column">
        <h4 class="inline">Description:&nbsp;</h4>
        <span>{{ validator.details | noBlanks }}</span>
      </li>
      <li class="column">
        <h4 class="inline">Website:&nbsp;</h4>
        <span v-if="website !== `--`">
          <a
            id="validator-website"
            :href="website"
            target="_blank"
            rel="nofollow noreferrer noopener"
            >{{ website }}</a
          >
        </span>
        <span v-else id="validator-website">{{ website | noBlanks }}</span>
      </li>
      <li class="column" v-if="!!validator.countryName">
        <h4 class="inline">1.country name:&nbsp;</h4>
        <span v-if="website !== `--`">
          <a
            id="validator-website"
            :href="`https://${validator.countryName}.1.country`"
            target="_blank"
            rel="nofollow noreferrer noopener"
            >{{ validator.countryName }}</a
          >
        </span>
        <span v-else id="validator-website">{{ website | noBlanks }}</span>
      </li>
      <li class="column">
        <h4>Validator Address:&nbsp;</h4>
        <span>
          <Bech32 :address="validator.operator_address" :evmAddress=evmAddress :long-form="true" />
        </span>
      </li>
      <li class="column">
        <h4
          v-info-style
          v-tooltip.top="tooltips.v_profile.validator_since"
          class="inline"
        >
          Validator Since:&nbsp;
        </h4>
        <span>Block #{{ validator.creation_height }}</span>
      </li>
      <li class="column">
        <h4
          v-info-style
          v-tooltip.top="tooltips.v_profile.commission"
          class="inline"
        >
          Commission:&nbsp;
        </h4>
        <span>{{ validator.rate | percent | notAvailable }}</span>
      </li>
      <li class="column">
        <h4
          v-info-style
          v-tooltip.top="tooltips.v_profile.max_daily_change"
          class="inline"
        >
          Max Commission Change:&nbsp;
        </h4>
        <span>{{ validator.max_change_rate | percent | notAvailable }} (per day)</span>
      </li>
      <li v-show="false" class="column">
        <h4 class="inline">Last Commission Change:&nbsp;</h4>
        <span>Block #{{ validator.update_height }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { shortDecimals, percent, ones } from "scripts/num"
import { sanitizeUrl } from "@braintree/sanitize-url";
import Bech32 from "common/Bech32"
import tooltips from "src/components/tooltips"
import { fromBech32 } from "@harmony-js/crypto"

export default {
  name: `general-info-block`,
  filters: {
    shortDecimals,
    percent,
    ones,
    // empty descriptions have a strange '[do-not-modify]' value which we don't want to show
    noBlanks: function(value) {
      if (!value || value === `[do-not-modify]`) return `--`
      return value
    }
  },
  components: {
    Bech32
  },
  props: ["validator"],
  data: () => ({ tooltips }),
  computed: {
    evmAddress() {
      return fromBech32(this.validator.operator_address)
    },
    selfBondPercent() {
      return percent(this.validator.self_stake / this.validator.total_stake)
    },
    website() {
      let url = this.validator.website

      if (!url || url === "[do-not-modify]") {
        return ""
      } else if (!url.match(/http[s]?/)) {
        url = `https://` + url
      }
      return sanitizeUrl(url)
    }
  },

  methods: {
    shortDecimals,
    percent
  }
}
</script>

<style scoped>
@import "./styles.css";

.column {
  margin: 0;
}
.inline {
  display: inline-block;
}

.card-white {
  padding: 0;
  padding-top: var(--unit);
}
</style>
