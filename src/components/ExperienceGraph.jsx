import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { experienceGraphData } from "../data/experienceGraph";

export default function ExperienceGraph() {
  return (
    <section className="py-24 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-4">Experience Growth</h3>

        <p className="text-slate-400 max-w-2xl mb-10">
          A visual overview of my frontend journey across enterprise and
          fintech environments, reflecting growth in responsibility,
          complexity, and impact.
        </p>

        <div className="h-72 md:h-96 bg-slate-950 rounded-2xl p-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={experienceGraphData}>
              <XAxis
                dataKey="year"
                stroke="#94a3b8"
                tickLine={false}
              />
              <YAxis
                hide
                domain={[0, 9]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#020617",
                  border: "1px solid #1e293b",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#e5e7eb" }}
                itemStyle={{ color: "#6366f1" }}
                formatter={(value, name, props) => [
                  `Impact Level: ${value}`,
                  props.payload.label,
                ]}
              />
            <Line
                type="monotone"
                dataKey="level"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                isAnimationActive={true}
                animationDuration={1200}
                />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
