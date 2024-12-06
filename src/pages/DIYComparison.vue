<template>
  <q-page class="flex-column">
    <MessagingPage
      :messages="messages"
      @left-button-click="handleLeftClick"
      @right-button-click="handleRightClick"
    />

    <!-- Render the comparison table below the messaging structure -->
    <div class="container q-pa-md">
      <q-card class="q-ma-md q-pa-md">
        <q-card-section>
          <div class="text-h5 text-center q-mb-md">
            DIY vs. Professional Development: What’s Best for You?
          </div>
          <p class="text-center">
            Compare the benefits of building your website on your own versus working with an expert.
          </p>
        </q-card-section>
        <q-card-section>
          <q-table
            dense
            flat
            :rows-per-page-options="[5]"
            class="diy-comparison-table"
            :rows="comparisonData"
            :columns="columns"
          >
            <template #body-cell-benefit="props">
              <q-td>{{ props.row.benefit }}</q-td>
            </template>
            <template #body-cell-diy="props">
              <q-td>{{ props.row.diy }}</q-td>
            </template>
            <template #body-cell-professional="props">
              <q-td>{{ props.row.professional }}</q-td>
            </template>
          </q-table>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MessagingPage from '../components/MessagingPage.vue';
import DIYComparison from '../data/messages/DIYComparison';
import { useRouter, useRoute } from 'vue-router';
import { useTrackingStore } from '../stores/trackingStore';

export default defineComponent({
  components: {
    MessagingPage,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const trackingStore = useTrackingStore();

    const messages = DIYComparison; // Load messages from DIYComparison.ts
    const currentPage = route.name as string;

    function handleLeftClick() {
      trackingStore.addVisitedPage(currentPage);
      trackingStore.recordChoice(currentPage, 'left');
      const nextPage = trackingStore.getNextPage(currentPage, 'left');
      if (nextPage) router.push(nextPage);
    }

    function handleRightClick() {
      trackingStore.addVisitedPage(currentPage);
      trackingStore.recordChoice(currentPage, 'right');
      const nextPage = trackingStore.getNextPage(currentPage, 'right');
      if (nextPage) router.push(nextPage);
    }

    const columns = [
      { name: 'benefit', label: 'Benefit', align: 'left', field: 'benefit' },
      { name: 'diy', label: 'DIY Approach', align: 'left', field: 'diy' },
      { name: 'professional', label: 'Professional Development', align: 'left', field: 'professional' },
    ];

    const comparisonData = [
      {
        benefit: 'Custom Design',
        diy: 'Limited to templates and design tools.',
        professional: 'Tailored specifically to your unique vision.',
      },
      {
        benefit: 'Time Investment',
        diy: 'Requires hours of trial and error.',
        professional: 'Streamlined process with expert guidance.',
      },
      {
        benefit: 'Scalability',
        diy: 'Limited features as your business grows.',
        professional: 'Built for long-term growth and scalability.',
      },
      {
        benefit: 'Technical Expertise',
        diy: 'You need to learn coding or settle for limitations.',
        professional: 'Your developer handles all technical complexities.',
      },
      {
        benefit: 'Support',
        diy: 'Self-reliant with minimal or no assistance.',
        professional: 'Dedicated support throughout the process.',
      },
    ];

    return { messages, handleLeftClick, handleRightClick, columns, comparisonData };
  },
});
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';
  @import '/src/css/shared-styles.scss';

  .container {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
  }

  .diy-comparison-table {
    margin-top: 1.5rem;
    th {
      font-weight: bold;
      text-align: left;
    }
    td {
      padding: 0.75rem;
    }
  }
</style>

<!-- src/pages/DIYComparison.vue -->
