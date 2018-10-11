<template>
  <!-- <transition name="info" mode="out-in"> -->
    <table :key="info.pairing" v-if="info" class="side__content__table" :data-index="1">
      <tr v-for="(value, key) in info" :key="key" class="side__content__table__row">
        <td class="side__content__table__row__column">
          <h5 class="side__content__table__row__column__title">{{ key }}</h5>
        </td>
        <td class="side__content__table__row__column" :class="{ 'side__content__table__row__column--labels': key === 'certificates' }">
          <p v-if="typeof value === 'string'" class="side__content__table__row__column__text">
            {{ value }}
          </p>
          <div
            v-else
            :class="{
              'side__content__table__row__column__text': value[0].substring(value[0].length - 3) !== 'svg',
              'side__content__table__row__column__labels': value[0].substring(value[0].length - 3) === 'svg',
            }"
          >
            <span v-for="info2 in value" :key="info2" v-if="info2.substring(info2.length - 3) !== 'svg'">
              {{ info2 }}<br>
            </span>
            <img v-if="info2.substring(info2.length - 3) === 'svg'" v-for="info2 in value" :key="info2" :src="require(`../assets/${info2}`)" alt="" class="side__content__table__row__column__labels__item">
          </div>
        </td>
      </tr>
    </table>
  <!-- </transition> -->
</template>

<script>
export default {
  name: 'SideContentInfo',
  props: {
    info: Object
  }
}
</script>

<style lang="scss" scoped>
.info-enter-active {
  transition: all .5s ease-out 1.4s;
}
.info-leave-active {
  transition: all .3s ease-out;
}
.info-enter, .info-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

.side {
  &__content {
    &__table {
      border-collapse: separate;
      border-spacing: 20px;
      margin: -20px;
      &__row {
        &__column {
          &--labels {
            vertical-align: middle;
          }
          &__title {
            text-transform: capitalize;
            font-family: 'Sree Krushnadevaraya';
            color: #9B9B9B;
          }
          &__text {
            font-size: 12px;
            // font-weight: 200;
          }
          &__labels {
            align-self: center;
            &__item {
              margin-right: 15px;
              &:hover {
                filter: brightness(0.5);
              }
            }
          }
        }
      }
    }
  }
}
</style>
