import React, { useState, useEffect } from "react";
import { Octokit } from "octokit";
import Card from "./Card";

const GitHubComments = () => {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchIssues = async () => {

      const octokit = new Octokit({
        // user Personal token 
        auth: "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",
      });

      try {
        const response = await octokit.request(
          `GET /repos/{owner}/{repo}/issues`,
          {
            owner: "octocat",
            repo: "Spoon-Knife",
            page: page,
          }
        );
        setIssues(response.data);
      } catch (error) {
        console.log(
          `Error! Status: ${error.status}. Message: ${error.response.data.message}`
        );
      }
    };
    fetchIssues();
  }, [page]);
  console.log(issues);

  //Page Changing
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <div className="container my-5">
        {/* Conditional Rendering start */}
        {issues.length === 0 ? (
          <p>No issues found.</p>
        ) : (
          issues.map((issue, index) => (
            <>
              <Card className="my-3" key={index} issue={issue} />
            </>
          ))
        )}
      </div>
      <div>
        {/* Next and Perv Page */}
        <div className="my-5">
          <button onClick={handlePrevPage} className="btn btn-primary me-2">
            {" "}
            Prev Page
          </button>
          <button onClick={handleNextPage} className="btn btn-primary">
            {" "}
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default GitHubComments;
