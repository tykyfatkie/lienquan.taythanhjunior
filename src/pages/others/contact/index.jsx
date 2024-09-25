
import Contact from "@/components/contact";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Tây Thạnh Junior',
  description:
    'Tây Thạnh Junior',
}

const ContactPage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <Contact />
    </>
  );
};

export default ContactPage
