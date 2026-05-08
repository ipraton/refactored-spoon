var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase",
  "level": "1",
  "url": "#shorttitlelowercase",
  "type": "Article",
  "number": "",
  "title": "",
  "body": " Here is a graph of the DERIVATIVE of a function . The graph is of , NOT .     f(x)=0.7-sin(x\/1.26)         What are all values of such that is decreasing?                     "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
