import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Blog from "./Blog"; // Update the path as needed

test("Blog component renders the title and author but not the url or likes by default", () => {
  const mockBlog = {
    title: "Test Blog Title",
    author: "John Doe",
    url: "http://testurl.com",
    likes: 5,
    id: "12345",
  };

  const component = render(<Blog blog={mockBlog} />);

  // Check that title and author are in the document
  expect(component.container).toHaveTextContent("Test Blog Title");
  expect(component.container).toHaveTextContent("John Doe");

  // Check that URL and likes are not visible
  const detailsDiv = component.container.querySelector(".blog-details");
  expect(detailsDiv).not.toBeVisible();
});
