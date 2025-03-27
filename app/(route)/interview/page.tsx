import Agent from "@/components/Agent"

const Page = () => {
    return (
        <>
            <h3 className="my-8">Interview Generation</h3>
            <Agent userName="You" userId="user1" type="generate"></Agent>
        </>
    )
}

export default Page