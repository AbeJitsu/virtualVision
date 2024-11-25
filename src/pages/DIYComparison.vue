<template>
  <q-page class="diy-comparison-page">
    <div class="container">
      <q-card class="q-ma-md q-pa-md">
        <q-card-section>
          <div class="text-h5 text-center q-mb-md">
            DIY vs. Professional Development: What’s Best for You?
          </div>
          <p class="text-center">
            Compare the benefits of building your website on your own versus working with an expert to achieve your vision.
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

<script setup lang="ts">
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
</script>

<style scoped lang="scss">
.diy-comparison-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;

  .container {
    max-width: 800px;
    width: 100%;
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
}
</style>
