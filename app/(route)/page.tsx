import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import { getCurrentUser, getInterviewByUserId, getLatestInterviews } from "@/lib/actions/auth.action";
import Image from "next/image";
import Link from "next/link";

 const Page = async () => {
  const user = await getCurrentUser();
  // parallel request : allows fetching both data at the same time
  // array destructuring
  // Promise.all -> fetches in parallel
  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewByUserId(user?.id!),
    await getLatestInterviews( {userId: user?.id!} )
  ])

  
  const hasPastInterviews = userInterviews?.length > 0
  const hasUpcomingInterviews = latestInterviews?.length > 0
  return (
      <>
        <section className="card-cta mt-8">
          <div className="flex flex-col gap-6 max-w-lg">
            <h2>Get Interview Ready with AI-Powered Feedback</h2>
            <p className="text-lg">
              Practice on real interview question & get real feedback
            </p>
            <Button asChild className="btn-primary max-sm:w-full">
              <Link href="/interview">Start an Interview</Link>
            </Button>
          </div>

          <Image src="/robot.png" 
            alt="robot" width={400} height={400} className="max-sm:hidden"/>
        </section>

        <section className="flex flex-col gap-6 mt-8">
          <h2>Your Interviews</h2>
          <div className="flex flex-row interviews-section">
            
            {hasPastInterviews ? 
            ( 
              userInterviews?.map((interview) => (
                <InterviewCard {...interview} key={interview.id}></InterviewCard>
              ))
            ) : 
            (
              <p>You haven&apos;t taken any interviews yet</p>
            )}
          </div>
        </section>
        <section className="flex flex-col gap-6 mt-8">
          <h2>Take an Interview</h2>
          <div className="flex flex-row interviews-section">
            {hasUpcomingInterviews ? 
            ( 
              latestInterviews?.map((interview) => (
                <InterviewCard {...interview} key={interview.id}></InterviewCard>
              ))
            ) : 
            (
              <p>There are no new interviews available.</p>
            )}
          </div>
        </section>
      </>
  );
}

export default Page