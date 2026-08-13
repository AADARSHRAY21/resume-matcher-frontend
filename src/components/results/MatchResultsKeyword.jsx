import ScoreBadge from "./ScoreBadge.jsx";
import SkillChip from "./SkillChip.jsx";

export default function MatchResultsKeyword({ data }) {
  const { matchedSkills = [], missingSkills = [], matchPercentage = 0 } = data;
  const total = matchedSkills.length + missingSkills.length;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <ScoreBadge score={matchPercentage} label="Keyword Match" />
        <p className="text-sm text-text-muted">
          {matchedSkills.length} of {total} JD skills found in the resume.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-text-muted mb-2">Matched Skills</h4>
        <div className="flex flex-wrap gap-2">
          {matchedSkills.length > 0 ? (
            matchedSkills.map((skill) => <SkillChip key={skill} skill={skill} type="match" />)
          ) : (
            <span className="text-sm text-text-muted">No skills matched.</span>
          )}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-text-muted mb-2">Missing Skills</h4>
        <div className="flex flex-wrap gap-2">
          {missingSkills.length > 0 ? (
            missingSkills.map((skill) => <SkillChip key={skill} skill={skill} type="gap" />)
          ) : (
            <span className="text-sm text-text-muted">No gaps detected.</span>
          )}
        </div>
      </div>
    </div>
  );
}