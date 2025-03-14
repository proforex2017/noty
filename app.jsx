// Get Notepad from global scope
const Notepad = window.Notepad;

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Notepad />);
// Make React available in module scope
const { useState } = window.React;

// Notepad Component
function Notepad() {
  const [note, setNote] = useState('');

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Online Notepad</h1>
      
      <div className="space-y-4">
        <textarea 
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Start typing your notes here..."
          className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
        />
        
        <div className="mt-4">
          <article className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">The Power of Digital Note-Taking</h2>
            
            <p className="mb-4">
              In today's busy world, capturing thoughts matters more than ever. An 
              <a 
                href="https://onlinenotepad.space/" 
                className="text-primary hover:underline ml-1"
                rel="dofollow"
              >
                online notepad
              </a> 
              helps you track ideas quickly and easily.
            </p>

            <h3 className="text-xl font-semibold mb-3">Why Digital Notes Work</h3>
            <p className="mb-4">
              Paper notebooks get lost. They wear out. They take up space. Online 
              notepads solve these problems. Your notes stay safe and accessible 
              from any device.
            </p>

            <h3 className="text-xl font-semibold mb-3">Simple and Secure</h3>
            <p className="mb-4">
              Web-based note tools protect your writing. They save automatically. 
              You won't lose work if your computer crashes. Cloud storage keeps 
              everything backed up.
            </p>

            <h3 className="text-xl font-semibold mb-3">How Online Notepads Help</h3>
            <p className="mb-4">
              Students track homework. Writers capture story ideas. Professionals 
              log meeting notes. Artists sketch quick concepts. Everyone benefits 
              from quick, easy note-taking.
            </p>

            <h3 className="text-xl font-semibold mb-3">Key Features to Look For</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Clean, simple interface</li>
              <li>Auto-save function</li>
              <li>Cross-device sync</li>
              <li>Basic text formatting</li>
              <li>Search capabilities</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Are online notepads safe?</h4>
                <p>Most use strong encryption. Choose reputable services with 
                  privacy policies.</p>
              </div>
              
              <div>
                <h4 className="font-semibold">Do I need internet always?</h4>
                <p>Many tools work offline and sync when online. Check each 
                  app's features.</p>
              </div>
              
              <div>
                <h4 className="font-semibold">Can I export my notes?</h4>
                <p>Most online notepads let you download or share notes in 
                  different formats.</p>
              </div>
              
              <div>
                <h4 className="font-semibold">Is it free?</h4>
                <p>Many offer free basic plans. Premium features might cost extra.</p>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-600">
              Ready to start taking better notes? Try an 
              <a 
                href="https://onlinenotepad.space/" 
                className="text-primary hover:underline ml-1"
                rel="dofollow"
              >
                online notepad
              </a> 
              today and transform how you capture ideas.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

// Make Notepad available globally
window.Notepad = Notepad;
