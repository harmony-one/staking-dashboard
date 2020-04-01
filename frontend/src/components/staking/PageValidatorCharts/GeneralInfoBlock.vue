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
      <li class="column">
        <h4>Validator Address:&nbsp;</h4>
        <span>
          <Bech32 :address="validator.operator_address" :long-form="true" />
        </span>
      </li>
      <li class="column">
        <h4 class="inline">Validator Since:&nbsp;</h4>
        <span>Block #{{ validator.creation_height }}</span>
      </li>
      <li class="column">
        <h4 class="inline">Commission:&nbsp;</h4>
        <span>Block #{{ validator.commission }}</span>
      </li>
      <li class="column">
        <h4 class="inline">Commission:&nbsp;</h4>
        <span>{{ validator.rate | percent | notAvailable }}</span>
      </li>
      <li class="column">
        <h4 class="inline">Max Daily Change:&nbsp;</h4>
        <span>{{ validator.max_change_rate | percent | notAvailable }}</span>
      </li>
      <li v-show="false" class="column">
        <h4 class="inline">Last Commission Change:&nbsp;</h4>
        <span>Block #{{ validator.update_height }}</span>
      </li>
    </ul>



    <ul v-show="false" class="row">
      <li>
        <h4>Voting Power / Total Stake</h4>
        <span id="page-profile__power">
          {{ validator.voting_power | percent | notAvailable }} /
          {{ validator.total_effective_stake | ones | shortDecimals }}
        </span>
      </li>
      <li>
        <h4>Self Stake</h4>
        <span id="page-profile__self-bond"
          >{{ selfBondPercent }} /
          {{ validator.self_stake | ones | shortDecimals }}</span
        >
      </li>
      <li>
        <h4>Min Self Delegation</h4>
        <span id="page-profile__min_self_delegation">
          {{ validator.min_self_delegation | ones | shortDecimals }}
        </span>
      </li>
      <li>
        <h4>Max Total Delegation</h4>
        <span id="page-profile__max_total_delegation">
          {{ validator.max_total_delegation | ones | shortDecimals }}
        </span>
      </li>
      <li>
        <h4>Validator Since</h4>
        <span>Block #{{ validator.creation_height }}</span>
      </li>
      <li>
        <h4>Uptime</h4>
        <span id="page-profile__uptime">
          {{ validator.uptime_percentage | percent | notAvailable }}
        </span>
      </li>
      <li>
        <h4>Current Commission Rate</h4>
        <span>{{ validator.rate | percent | notAvailable }}</span>
      </li>
      <li>
        <h4>Max Commission Rate</h4>
        <span>{{ validator.max_rate | percent | notAvailable }}</span>
      </li>
      <li>
        <h4>Max Daily Commission Change</h4>
        <span>{{ validator.max_change_rate | percent | notAvailable }}</span>
      </li>
      <li>
        <h4>Last Commission Change</h4>
        <span>Block #{{ validator.update_height }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { shortDecimals, percent, ones } from "scripts/num"
import Bech32 from "common/Bech32"

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
  computed: {
    selfBondPercent() {
      return percent(this.validator.self_stake / this.validator.total_stake)
    },
    website() {
      let url = this.validator.website

      console.log(this.validator)

      if (!url || url === "[do-not-modify]") {
        return ""
      } else if (!url.match(/http[s]?/)) {
        url = `https://` + url
      }
      return url
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
