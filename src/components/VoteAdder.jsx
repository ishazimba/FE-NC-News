import { useState } from "react";
import { PatchVotesById } from "../utils/api";

function VoteAdder({ article_id, votes }) {
  const [currVotes, setCurrVotes] = useState(votes);
  const [voted, setVoted] = useState(false);
  const [error, setError] = useState(null);

  function incVotes() {
    if (!voted) {
      setCurrVotes((currVotes) => currVotes + 1);
      setVoted(true);

      PatchVotesById(article_id, +1).catch((error) => {
        setCurrVotes((currVotes) => currVotes - 1);
        setVoted(false);
        setError(error);
      });
    } else {
      setCurrVotes((currVotes) => currVotes - 1);
      setVoted(false);
      PatchVotesById(article_id, -1).catch((error) => {
        setCurrVotes((currVotes) => currVotes + 1);
        setVoted(true);
        setError(error);
      });
    }
  }

  function decVotes() {
    if (voted) {
      setCurrVotes((currVotes) => currVotes - 1);
      setVoted(false);
      PatchVotesById(article_id, -1).catch((error) => {
        setCurrVotes((currVotes) => currVotes + 1);
        setVoted(true);
        setError(error);
      });
    }
  }

  return (
    <div className="votesUdate">
      <button className="voteButton" onClick={incVotes} disabled={voted}>
        ⬆️
      </button>
      <button className="voteButton" onClick={decVotes} disabled={!voted}>
        ⬇️
      </button>
      <p>{currVotes} votes</p>
    </div>
  );
}

export default VoteAdder;
