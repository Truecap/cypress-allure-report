import BlogPage from "../Pages/BlogPage";
import HomePage from "../Pages/HomePage";
const home = new HomePage();
const blog = new BlogPage();

describe("Verify seaarch input ", () => {
  it("should open resource drop-down menu and click Blog button,then type t the input field 'number pool' and click enter", () => {
    home.launchWebApp();
    home.openBlogPage();
    blog.typeToSearch();
    blog.validateForSearch();
  });
});
