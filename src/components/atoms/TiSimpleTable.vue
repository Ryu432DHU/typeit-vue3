<template>
  <table>
    <slot />
  </table>
</template>

<style lang="scss">
table {
  width: 100%;

  tr {
    border-bottom: solid 1px #e2e8f0;

    & ~ tr:hover {
      background-color: #f4f4f4;
    }

    th, td {
      height: 3rem;
      line-height: 3rem;
      text-align: left;
      padding-left: 1rem;
    }

    th {
      color: #717171;
      font-size: 0.75rem;
      font-weight: bolder;
    }

    td {
      font-size: 0.875rem;
    }
  }
}
</style>