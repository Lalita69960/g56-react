import React from "react";

export const Content = () => {
  return (
    <main class="container my-5">
      <div class="row">
        <MainContent />
        <SidebarContent />
      </div>
    </main>
  );
};

export const MainContent = () => {
  return (
    <div class="col-md-8">
      <h2>Main Content</h2>
      <p>
        This is the main content section. You can add more details or features
        here.
      </p>
    </div>
  );
};

export const SidebarContent = () => {
  return (
    <div class="col-md-4">
      <h3>Sidebar</h3>
      <p>This is a sidebar section. Add extra links or information here.</p>
    </div>
  );
};

export default Content;