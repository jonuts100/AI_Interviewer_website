import Agent from "@/components/Agent"
import { getCurrentUser } from "@/lib/actions/auth.action"

const Page = async () => {
    const user = await getCurrentUser()
    return (
        <>
            <h3 className="my-8">Interview Generation</h3>
            <Agent userName={user?.name} userId={user?.id} type="generate"></Agent>
        </>
    )
}

export default Page