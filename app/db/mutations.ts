import { sql } from '@vercel/postgres';

// postId = post_name + post_publishAt
export async function increaseView(postId: string) {
  console.log('increaseView');

  try {
    await sql`
        INSERT INTO views ( post_id, count )
        VALUES ( ${postId}, 1 )
        ON CONFLICT (post_id)
        DO UPDATE SET count = views.count + 1
      `;
  } catch (error) {
    console.log(`increaseView error: ${error}`);
  }
}
