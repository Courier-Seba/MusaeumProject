const getters = {
  museumList: state => state.list,
  museumTypes: state => state.types,
  museumDetail: state => state.loadedMuseum,
  museumCollections: state => state.collections,
  museumArtifacts: state => state.loadedMuseumArifacts,
  museumCountries: state => state.countries
};

export default getters;
