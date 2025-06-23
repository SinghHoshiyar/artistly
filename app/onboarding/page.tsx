 import Head from "next/head";
 import ArtistForm from "@/components/ArtistForm";

export default function OnboardingPage() {
  return (
    <>
    <Head>
        <title>Become an Artist | Artistly</title>
        <meta name="description" content="Join Artistly and reach thousands of event planners. Submit your profile, rates, and categories to get listed." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Join Artistly as an Artist" />
        <meta property="og:description" content="Showcase your talent, set your availability and receive bookings directly from event managers." />
        <meta property="og:image" content="/assets/artist-form-preview.png" />
    </Head>

    <div className="py-10 px-4">
      <ArtistForm />
    </div>
    </>
  );
}
