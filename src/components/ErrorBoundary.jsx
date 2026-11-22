import React from 'react';
import { ShieldAlert, RotateCcw, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full bg-white text-slate-900 flex items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl text-center space-y-5">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-600">
              <ShieldAlert className="w-7 h-7" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight">
                XPlay Interface Shield
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The interface encountered a temporary runtime state and protected your session.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.location.reload()}
                className="flex-1 py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-sky-500/25 transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reload App</span>
              </button>

              <button
                onClick={this.handleReset}
                className="flex-1 py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Go to Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
