module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "common": "@/common",
        "components": "@/components",
        "views": "@/views",
        "Search": "@/Search",
        "Order": "@/Order",
        "Profile": "@/Profile",
        "Msite": "@/Msite",
      }
    }
  }
}
