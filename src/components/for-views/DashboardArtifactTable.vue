<template>
  <div>
    <b-table :data="artifactList" :loading="false" :mobile-cards="true">
      <template slot-scope="props">
        <b-table-column
          field="id"
          :label="$t('artifactTable.id')"
          width="40"
          numeric
        >
          {{ props.row.id }}
        </b-table-column>
        <b-table-column field="name" :label="$t('artifactTable.name')">
          {{ props.row.name }}
        </b-table-column>
        <b-table-column field="image" :label="$t('artifactTable.imagePreview')">
          <image-preview :imgSrc="props.row.picture"></image-preview>
        </b-table-column>
      </template>

      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="heart-broken" size="is-large"> </b-icon>
            </p>
            <p>{{ $t("artifactTable.empty") }}</p>
          </div>
        </section>
      </template>
    </b-table>
  </div>
</template>

<script>
import ImagePreview from "@/components/for-ui/ImagePreview";
export default {
  name: "ArtifactTable",
  props: {
    artifactList: Array
  },
  components: {
    ImagePreview
  }
};
</script>
