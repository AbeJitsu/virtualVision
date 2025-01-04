<template>
  <div class="action-buttons">
    <q-btn
      :label="leftButtonLabel"
      @click="handleLeftClick"
      class="custom-btn choice-btn"
    />
    <q-btn
      :label="rightButtonLabel"
      @click="handleRightClick"
      class="custom-btn choice-btn"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useTrackingStore } from '../stores/trackingStore';

export default defineComponent({
  props: {
    currentPage: {
      type: String,
      required: true,
    },
    leftButtonLabel: {
      type: String,
      required: true,
    },
    rightButtonLabel: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const trackingStore = useTrackingStore();

    function handleLeftClick() {
      const nextPage = trackingStore.getNextPage(props.currentPage, 'left');
      if (nextPage) {
        router.push(nextPage.route);
      } else {
        console.error('No next page determined for left button.');
      }
    }

    function handleRightClick() {
      const nextPage = trackingStore.getNextPage(props.currentPage, 'right');
      if (nextPage) {
        router.push(nextPage.route);
      } else {
        console.error('No next page determined for right button.');
      }
    }

    return {
      handleLeftClick,
      handleRightClick,
    };
  },
});
</script>

<style scoped lang="scss">
@import '/src/css/app.scss';

.action-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3.5rem;

  @media (max-width: 599px) {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .custom-btn {
    width: 50%;
    max-width: 25rem;
    background-color: rgba($grayVeryLight, 0.65);
    font-size: large;
    font-weight: 600;
    border-radius: 8px;
    padding: 1.25rem 2rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
      box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 599px) {
      width: 100%;
    }
  }
}
</style>
