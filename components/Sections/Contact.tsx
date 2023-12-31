import FooterSectionIcons from "../Icons/FooterSectionIcons";
import { IContact } from "@/types/interface";

const Contact = ({ data }: { data: IContact }) => {
  return (
    <section id="contact" className="pt-14 text-muted-foreground sm:text-lg">
      <div className="group">
        <h1 className="title-bottom-line cursor-pointer text-2xl">Contact</h1>
        <div className="flex justify-center gap-2 flex-wrap">
          {data?.socialLinks?.map((item) => (
            <FooterSectionIcons key={item?._id} {...item} />
          ))}
        </div>
      </div>
      <div className="mt-4 mb-10 text-center text-sm">{data?.copyright}</div>
    </section>
  );
};
export default Contact;
