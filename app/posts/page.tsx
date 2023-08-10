import { sql } from "@vercel/postgres";

async function BlogPage() {
  const { rows } = await sql`SELECT * FROM test`
  console.log(rows)
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">{rows.map(v => (
      <div key={v.id}>{v.title}</div>
    ))}</div>
  )
}

export default BlogPage