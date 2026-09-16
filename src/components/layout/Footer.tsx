import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white pt-16">
      <Container>
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-r from-purple-500 to-pink-500 text-xs font-bold text-white">
                DS
              </div>

              <h3 className="font-bold text-slate-800">
                Dev <span className="text-pink-500">Stack</span>
              </h3>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex gap-5 text-sm text-slate-500">
              <span>GitHub</span>
              <span>Twitter</span>
              <span>LinkedIn</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700">
              PRODUCT
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-slate-500">
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700">
              COMPANY
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-slate-500">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700">
              LEGAL
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-slate-500">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-slate-200 py-8 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;