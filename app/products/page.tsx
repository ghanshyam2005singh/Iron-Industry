export default function ProductsPage() {
    return (
      <div>
        <h2 className="text-3xl font-semibold mb-4">Our Products</h2>
        <div className="space-y-6">
          <div className="border p-4 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold">🎓 AlumConnect</h3>
            <p className="text-gray-600">A platform to connect college students with verified alumni — helping build trust, mentorship, and opportunities.</p>
            <a href="https://alumconnect.devrhylme.org" className="text-blue-600 underline">Visit AlumConnect ↗</a>
          </div>
          {/* Future products can be listed similarly */}
        </div>
      </div>
    );
  }