import React from "react";

const ResultDisplay = ({ results }) => {
  console.log(results);
  return (
    <table>
      <thead>
        <tr>
          <th>Input</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={index}>
            <td>
              {result.input.trim() === "" ? <p>&lt;empty&gt;</p> : result.input}{" "}
            </td>
            <td>
              {result.divisions.length < 1 && result.output}
              <ul>
                {result.divisions.map((division, i) => (
                  <li key={i}>{division}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultDisplay;
