import React from 'react';
import Layout from '@theme/Layout';

export default function LegalNotice(): React.JSX.Element {
  return (
    <Layout
      title="Legal Notice"
      description="Legal notice and contact information"
    >
      <main
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '60px 24px',
        }}
      >
        <h1>Legal Notice</h1>

        <h2>Information according to § 5 DDG</h2>

        <p>
          Okan Uzal
          <br />
          Gazertstraße 19C
          <br />
          21075 Hamburg
          <br />
          Germany
        </p>

        <h2>Contact</h2>

        <p>
          Email: okan_uza@hotmail.de
        </p>

        <h2>Responsible for the content</h2>

        <p>
          Okan Uzal
          <br />
          Gazertstraße 19C
          <br />
          21075 Hamburg
        </p>

        <h2>Liability for links</h2>

        <p>
          This website contains links to external websites over whose content
          I have no control. The respective provider or operator of the linked
          pages is responsible for their content.
        </p>

        <h2>Copyright</h2>

        <p>
          The content and works created for this website are subject to German
          copyright law. Third-party content is identified where applicable.
        </p>
      </main>
    </Layout>
  );
}