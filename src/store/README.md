# VUEX
This is the vuex store

## Organization
All is exported from the index.js. Internal folders are hidden (start with _).

Store is gruped by logical modules. In the modules folder. Since nothing should be called from outside the store instace this is hidden.

Ex:
  _modules/
    kitchen/
    bedroom/

All modules export all parts (actions, getters, mutations and state) in the index.js file.
