const ClassnameConf = ({ className, output }) => {
  const srcDoc = `
    <script type="module"> 
      import clsx from 'https://cdn.jsdelivr.net/npm/clsx@2.1.1/+esm'
      import { twMerge } from 'https://cdn.jsdelivr.net/npm/tailwind-merge@2.3.0/+esm'
        
      window.addEventListener("message", ({ data }) => {
        try {
          event.source.postMessage(twMerge(clsx(data.className)), "*");
        } catch (e) {}
      }, false);
    </script>
  `;

  return (
    <iframe
      className="d-none"
      srcDoc={srcDoc}
      message={{ className }}
      onMessage={output}
    />
  );
};

return { ClassnameConf };
