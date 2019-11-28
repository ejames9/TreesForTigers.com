/*
** mergeData.js
**
** mergeData.js is a helper func for merging two
** objects....
**
** Eric James Foster, Fostware LLC, MIT License.
***/

export default function mergeData(obj1, obj2) {
  return {
    ...obj1,
    ...obj2
  }
}
