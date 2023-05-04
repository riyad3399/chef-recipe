import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold my-5 ">Blog Page</h1>
      <div>
        <div
          className="card w-full bg-base-100 shadow-xl hover:border-2 border-orange-200 

 mt-8"
        >
          <div className="card-body">
            <h2 className="card-title">
              <span className="text-orange-400">Qution 1.</span> Tell us the
              differences between uncontrolled and controlled components.
            </h2>
            <div className="card-actions justify-end">
              {/* The button to open modal */}
              <label
                htmlFor="my-modal-1"
                className="btn btn-outline btn-primary"
              >
                View Answer
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-1" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-1"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">
                    <span className="text-orange-400">Answer: </span>
                    uncontrolled components are simpler to set up and require
                    less code, but can be more difficult to manage and interact
                    with. Controlled components can be more complex to set up
                    initially, but offer more control and flexibility in
                    managing the state of your application.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card w-full bg-base-100 shadow-xl hover:border-2 border-orange-200

 mt-8"
        >
          <div className="card-body">
            <h2 className="card-title">
              <span className="text-orange-400">Qution 2.</span> How to validate
              React props using PropTypes
            </h2>
            <div className="card-actions justify-end">
              {/* The button to open modal */}
              <label
                htmlFor="my-modal-2"
                className="btn btn-outline btn-primary"
              >
                View Answer
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-2" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-2"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">
                    <span className="text-orange-400">Answer: </span>
                    In React, PropTypes is a type-checking library that is used
                    to validate the props passed to a component. PropTypes is a
                    built-in package in React and it allows you to define the
                    expected data types for the props of a component. This can
                    help you catch potential errors early and make your code
                    more reliable.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card w-full bg-base-100 shadow-xl hover:border-2 border-orange-200

 mt-8"
        >
          <div className="card-body">
            <h2 className="card-title">
              <span className="text-orange-400">Qution 3.</span> Tell us the
              difference between nodejs and express js.
            </h2>
            <div className="card-actions justify-end">
              {/* The button to open modal */}
              <label
                htmlFor="my-modal-3"
                className="btn btn-outline btn-primary"
              >
                View Answer
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">
                    <span className="text-orange-400">Answer: </span>
                    <span className="text-green-400 underline">Node.js</span> is
                    a server-side JavaScript runtime environment that allows you
                    to execute JavaScript code outside of a web browser. Node.js
                    provides a set of APIs for performing various server-side
                    tasks, such as handling HTTP requests, interacting with
                    databases, and working with file systems.
                    <br />
                    <span className="text-green-400 underline">Express.js</span>
                    , on the other hand, is a web application framework built on
                    top of Node.js. It provides a set of tools and utilities for
                    building web applications and APIs using Node.js. Express.js
                    simplifies the process of handling HTTP requests and
                    responses, managing middleware, and routing requests to the
                    appropriate handlers.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card w-full bg-base-100 shadow-xl hover:border-2 border-orange-200

 mt-8"
        >
          <div className="card-body">
            <h2 className="card-title">
              <span className="text-orange-400">Qution 4.</span> What is a
              custom hook, and why will you create a custom hook?
            </h2>
            <div className="card-actions justify-end">
              {/* The button to open modal */}
              <label
                htmlFor="my-modal-4"
                className="btn btn-outline btn-primary"
              >
                View Answer
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-4"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">
                    <span className="text-orange-400">Answer: </span>A custom
                    hook is a reusable piece of logic that encapsulates complex
                    functionality and provides an easy-to-use interface for
                    other components to consume. Custom hooks can be useful when
                    you have some functionality that needs to be shared across
                    multiple components.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
