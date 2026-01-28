import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "../graphql/queries";

export default function ProfileIntro() {
  const { data, loading, error } = useQuery(GET_PROFILE);

  if (loading) return <p className="text-slate-400">Loading...</p>;
  if (error) return <p className="text-red-400">Error loading profile</p>;

  return (
    <div className="text-gray-200">
      <h2 className="text-2xl font-bold">{data.profile.name}</h2>
      <p className="text-indigo-400">{data.profile.role}</p>
      <p className="mt-2 text-slate-400">{data.profile.summary}</p>
    </div>
  );
}
