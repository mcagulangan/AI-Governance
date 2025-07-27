import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Brain,
  Users,
  FileCheck,
  BarChart3,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Crown,
  Database,
  Eye,
  Lock,
  Target,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Shield className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">AI Governance</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/framework" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Framework
              </Link>
              <Link href="/implementation" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Implementation
              </Link>
              <Link href="/roles" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Roles & Benefits
              </Link>
              <Link href="/next-steps" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Next Steps
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Azure AI Governance Program</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Governance Program
              <br />
              <span className="text-2xl md:text-4xl">
                Building Responsible,
                <span className="text-blue-600"> Compliant</span>, and
                <span className="text-blue-600"> Secure AI</span>
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Establish a robust governance program to manage AI risks while enabling innovation across your enterprise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/framework" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/implementation">View Implementation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Governance Matters - Enhanced */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why AI Governance Matters</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Balance innovation with responsibility while managing critical risks across the AI lifecycle
            </p>
          </div>

          {/* Innovation vs Risk Balance */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  <CardTitle className="text-green-800">Innovation with Responsibility</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 mb-4">
                  AI drives efficiency, innovation, and insights across the enterprise while maintaining ethical
                  standards and compliance
                </p>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Accelerated business transformation</li>
                  <li>• Enhanced decision-making capabilities</li>
                  <li>• Competitive advantage through AI</li>
                  <li>• Ethical AI development practices</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <div className="flex items-center">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                  <CardTitle className="text-red-800">Managing Critical Risks</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 mb-4">
                  Without proper governance, AI systems can introduce significant risks to the organization
                </p>
                <ul className="text-red-700 space-y-2 text-sm">
                  <li>• Bias and unfair outcomes</li>
                  <li>• Regulatory and legal exposure</li>
                  <li>• Security vulnerabilities</li>
                  <li>• Stakeholder trust erosion</li>
                  <li>• Model drift and performance degradation</li>
                  <li>• Data privacy violations</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Governance Framework Drivers */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Governance Drivers</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Multiple factors drive the need for comprehensive AI governance across the enterprise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow border-purple-200 bg-purple-50">
                <CardHeader>
                  <Crown className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle className="text-lg text-purple-800">Executive Oversight</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700 text-sm">
                    Board-level accountability for AI decisions and strategic alignment with business objectives
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-blue-50">
                <CardHeader>
                  <Shield className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle className="text-lg text-blue-800">Regulatory Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700 text-sm">
                    Evolving AI regulations require proactive compliance frameworks and audit capabilities
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-green-200 bg-green-50">
                <CardHeader>
                  <Target className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle className="text-lg text-green-800">Operational Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 text-sm">
                    Standardized processes ensure consistent, reliable, and scalable AI operations
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-orange-200 bg-orange-50">
                <CardHeader>
                  <Users className="h-8 w-8 text-orange-600 mb-2" />
                  <CardTitle className="text-lg text-orange-800">Stakeholder Trust</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700 text-sm">
                    Transparent and ethical AI builds trust with customers, partners, and regulators
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Governance Framework Pillars */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Five Pillars of AI Governance</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our comprehensive framework addresses all critical aspects of AI governance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center">
                    <Crown className="h-6 w-6 text-purple-600 mr-2" />
                    <CardTitle className="text-lg">Foundation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Establish governance charter, policies, and training programs
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Executive oversight structure</li>
                    <li>• AI ethics framework</li>
                    <li>• Role-based training programs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center">
                    <Database className="h-6 w-6 text-blue-600 mr-2" />
                    <CardTitle className="text-lg">Data Governance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Secure, classify, and manage data throughout the AI lifecycle
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Data cataloging and classification</li>
                    <li>• Access controls and encryption</li>
                    <li>• Privacy protection measures</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center">
                    <Brain className="h-6 w-6 text-green-600 mr-2" />
                    <CardTitle className="text-lg">Model Lifecycle</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Manage models from development through deployment and monitoring
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Experiment tracking and versioning</li>
                    <li>• Automated testing and validation</li>
                    <li>• Deployment governance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center">
                    <Shield className="h-6 w-6 text-red-600 mr-2" />
                    <CardTitle className="text-lg">Risk & Compliance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Monitor risks, implement guardrails, and ensure regulatory compliance
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Bias and drift monitoring</li>
                    <li>• Security threat detection</li>
                    <li>• Compliance frameworks</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center">
                    <Eye className="h-6 w-6 text-orange-600 mr-2" />
                    <CardTitle className="text-lg">Transparency & Audit</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">Provide visibility, reporting, and audit capabilities</p>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Comprehensive audit trails</li>
                    <li>• Executive dashboards</li>
                    <li>• Model explainability</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Business Impact */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expected Business Impact</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Organizations with mature AI governance realize significant benefits
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">60% Faster Deployment</h4>
                <p className="text-gray-600 text-sm">Streamlined governance processes accelerate time-to-market</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">95% Risk Reduction</h4>
                <p className="text-gray-600 text-sm">Proactive governance minimizes regulatory and operational risks</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Zero Security Incidents</h4>
                <p className="text-gray-600 text-sm">Comprehensive security controls protect AI assets and data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Overview</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ensure responsible, transparent, and compliant AI across your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center">
                  <FileCheck className="h-8 w-8 text-blue-600 mr-3" />
                  <CardTitle>Data Governance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Catalog, classify, and secure sensitive data with proper access controls
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center">
                  <Brain className="h-8 w-8 text-blue-600 mr-3" />
                  <CardTitle>Model Lifecycle Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Track experiments, automate testing, and manage model deployment</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center">
                  <Shield className="h-8 w-8 text-blue-600 mr-3" />
                  <CardTitle>Risk & Compliance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Monitor bias, drift, and threats while maintaining compliance</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center">
                  <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
                  <CardTitle>Transparency & Auditability</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Provide clear audit trails and transparent decision-making processes</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-blue-600 mr-3" />
                  <CardTitle>Organizational Accountability</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Define clear roles and responsibilities across departments</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Azure */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tools & Platform - Why Azure</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Enterprise-grade capabilities designed for AI governance at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-500 rounded-lg p-4 mb-4 inline-block">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Enterprise-grade Security</h3>
              <p className="text-blue-100 text-sm">Scalability and security built for enterprise needs</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 rounded-lg p-4 mb-4 inline-block">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Native AI Toolchain</h3>
              <p className="text-blue-100 text-sm">Complete AI and ML development ecosystem</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 rounded-lg p-4 mb-4 inline-block">
                <FileCheck className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Integrated Compliance</h3>
              <p className="text-blue-100 text-sm">Built-in governance and compliance capabilities</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 rounded-lg p-4 mb-4 inline-block">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Microsoft Ecosystem</h3>
              <p className="text-blue-100 text-sm">Seamless integration with existing Microsoft tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Implement AI Governance?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how we can operationalize responsible AI at scale in your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/framework" className="flex items-center">
                Explore Framework
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/next-steps">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
