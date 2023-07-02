import { Layout } from "@/components/layout";
import { Type } from "@/components/type";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-20 md:grid-rows-1 h-full items-center">
      <div className="pb-4 md:pb-8">
        <Type.Title level={1}>
          hi, i&apos;m <span className="text-mermaid">ash</span> 👋🏻
        </Type.Title>

        <Type.Title level={2}>senior software engineer</Type.Title>

        <Type.Text>
          I&apos;m a front end-focused full stack software engineer and I&apos;ve been building
          projects and products since 2016. I currently live in NYC with my spouse, two cats, and a
          dog.
        </Type.Text>

        <Type.Text>
          sometimes I do art:{" "}
          <a href="https://instagram.com/microsoftoven" target="_blank" className="font-semibold">
            @microsoftoven
          </a>
        </Type.Text>
      </div>

      <div>
        <div className="grid grid-cols-12 grid-rows-1 h-full relative max-w-[500px] m-auto mb-8 md:mb-auto">
          <div className="col-start-1 col-span-6 row-start-1 pt-[20%]">
            <Layout.Image src="/images/ash_cat.jpg" alt="Ash and her orange cat Buddy" />
          </div>

          <div className="col-start-7 col-span-6 row-start-1 pl-[10%]">
            <Layout.Image src="/images/lucy.jpg" alt="Ash's dog Lucy in a yellow raincoat" />
          </div>

          <div className="col-start-4 col-span-6 row-start-1 pl-[10%] pt-[80%]">
            <Layout.Image src="/images/ash.jpg" alt="Ash with purple hair" />
          </div>
        </div>
      </div>
    </div>
  );
}
