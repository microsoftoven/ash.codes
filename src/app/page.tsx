import { Layout } from "@/components/layout";
import { Type } from "@/components/type";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:grid-rows-1 h-full items-center pb-4 md:pb-8">
      <div>
        <Type.Title level={1}>
          hi, i'm <span className="text-mermaid">ash</span> 👋🏻
        </Type.Title>

        <Type.Title level={2}>senior software engineer</Type.Title>

        <Type.Text>
          I'm a front end-focused full stack software engineer and I've been building projects and
          products since 2016. I currently live in NYC with my spouse, two cats, and a dog.
        </Type.Text>

        <Type.Text>
          sometimes, I do art:{" "}
          <a href="https://instagram.com/microsoftoven" className="font-semibold">
            @microsoftoven
          </a>
        </Type.Text>
      </div>
      <div className="grid grid-cols-[30%_20%_2rem_12%_auto] grid-rows-[2rem_45%_2rem_auto] origin-top max-w-full h-full">
        <Layout.Image
          className="col-start-1 col-span-2 row-start-2 row-span-2"
          src="/images/ash_cat.jpg"
          alt="Ash and her orange cat Buddy"
        />
        {/* <div className="col-start-3 col-span-1">&nbsp;</div> */}
        <Layout.Image
          className="col-start-4 col-span-2 row-start-1 row-span-3 -translate-y-2"
          src="/images/lucy.jpg"
          alt="Ash's dog Lucy in a yellow raincoat"
        />
        <Layout.Image
          className="col-start-2 col-span-3 row-start-3 row-span-2"
          src="/images/ash.jpg"
          alt="Ash with purple hair"
        />
      </div>
    </div>
  );
}
