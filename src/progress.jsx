import "./style.css";

function Progress({
  progressPercentage,
}) {

  return (

    <div className="card">

      <h2>
        📊 Progress Tracker
      </h2>

      <div className="progress-section">

        <p>
          Task Completion
        </p>

        <div className="progress-bar">

          <div
            className="progress-fill"

            style={{
              width:
                `${progressPercentage}%`
            }}
          >

            {progressPercentage}%

          </div>

        </div>

      </div>

    </div>
  );
}

export default Progress;