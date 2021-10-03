<template>
  <div class="presentation">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum doloremque
      officia eaque temporibus provident sed fugit nihil, quaerat, reprehenderit
      voluptate facere asperiores porro soluta sequi libero. Amet, quo. Ab,
      distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Architecto omnis molestias ipsam, libero quibusdam accusamus illum
      voluptatibus voluptate doloribus esse? Alias quaerat exercitationem
      ducimus officiis sequi totam, nobis doloremque quam!
    </p>

    <img src="@/assets/img/presentation.svg" alt="Apresentação do iBook" />
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>
