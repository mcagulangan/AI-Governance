import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Database,
  Brain,
  CheckCircle,
  ArrowRight,
  Lock,
  Eye,
  Settings,
  Crown,
  ExternalLink,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import { TrainingSection } from "@/components/training-section"

export default function ImplementationPage() {
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
              <Link href="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/framework" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Framework
              </Link>
              <Link href="/implementation" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
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

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Implementation Details</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Detailed Implementation
            <span className="text-blue-600"> Approach</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive tools, processes, and ownership models aligned with NIST AI Risk Management Framework
          </p>
        </div>
      </section>

      {/* Implementation Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="foundation" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-5 mb-8">
              <TabsTrigger value="foundation" className="flex items-center">
                <Crown className="h-4 w-4 mr-2" />
                Foundation
              </TabsTrigger>
              <TabsTrigger value="data-governance" className="flex items-center">
                <Database className="h-4 w-4 mr-2" />
                Data Governance
              </TabsTrigger>
              <TabsTrigger value="model-lifecycle" className="flex items-center">
                <Brain className="h-4 w-4 mr-2" />
                Model Lifecycle
              </TabsTrigger>
              <TabsTrigger value="risk-compliance" className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Risk & Compliance
              </TabsTrigger>
              <TabsTrigger value="transparency-audit" className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                Transparency & Audit
              </TabsTrigger>
            </TabsList>

            <TabsContent value="foundation" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <Crown className="h-8 w-8 text-purple-600 mr-3" />
                    <div>
                      <CardTitle className="text-2xl">Foundation Implementation</CardTitle>
                      <CardDescription className="text-lg">
                        Establish governance charter, policies, strategic alignment, and comprehensive training programs
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* NIST AI RMF Reference */}
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center mb-2">
                      <ExternalLink className="h-4 w-4 text-blue-600 mr-2" />
                      <h4 className="font-semibold text-blue-800">NIST AI RMF 1.0 Alignment</h4>
                    </div>
                    <p className="text-blue-700 text-sm mb-3">
                      This phase aligns with NIST AI RMF <strong>GOVERN</strong> function, establishing organizational
                      structures and processes for AI risk management.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-xs">
                      <div>
                        <strong className="text-blue-800">Key NIST Categories:</strong>
                        <ul className="text-blue-700 mt-1 space-y-1">
                          <li>• GOVERN-1.1: AI governance structure</li>
                          <li>• GOVERN-1.2: AI risk management strategy</li>
                          <li>• GOVERN-2.1: Roles and responsibilities</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-blue-800">Subcategories:</strong>
                        <ul className="text-blue-700 mt-1 space-y-1">
                          <li>• GOVERN-3.1: AI risk tolerance</li>
                          <li>• GOVERN-4.1: Risk management processes</li>
                          <li>• GOVERN-6.1: AI risk monitoring</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Settings className="h-5 w-5 mr-2 text-purple-600" />
                        Key Focus Areas
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Governance Charter Development
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          AI Ethics Policy Framework
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Strategic Objectives Alignment
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Executive Oversight Structure
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Comprehensive Training Programs
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Awareness & Education Initiatives
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        Implementation Steps
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            1
                          </span>
                          Define AI governance vision and mission
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            2
                          </span>
                          Establish governance committee structure
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            3
                          </span>
                          Create comprehensive policy framework
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            4
                          </span>
                          Develop role-based training curricula
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            5
                          </span>
                          Launch organization-wide awareness program
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            6
                          </span>
                          Secure executive approval and resources
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm text-purple-800">
                      <strong>Primary Roles:</strong> Executives, Legal, Ethics Teams, HR Learning & Development
                    </p>
                  </div>
                  <TrainingSection />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="data-governance" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <Database className="h-8 w-8 text-blue-600 mr-3" />
                    <div>
                      <CardTitle className="text-2xl">Data Governance Implementation</CardTitle>
                      <CardDescription className="text-lg">
                        Establish comprehensive data management and security controls
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* NIST AI RMF Reference */}
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center mb-2">
                      <ExternalLink className="h-4 w-4 text-blue-600 mr-2" />
                      <h4 className="font-semibold text-blue-800">NIST AI RMF 1.0 Alignment</h4>
                    </div>
                    <p className="text-blue-700 text-sm mb-3">
                      This phase aligns with NIST AI RMF <strong>MAP</strong> and <strong>MEASURE</strong> functions,
                      focusing on data quality, integrity, and privacy throughout the AI lifecycle.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-xs">
                      <div>
                        <strong className="text-blue-800">Key NIST Categories:</strong>
                        <ul className="text-blue-700 mt-1 space-y-1">
                          <li>• MAP-2.3: Data quality and integrity</li>
                          <li>• MAP-3.3: Data privacy and security</li>
                          <li>• MAP-5.1: Impact assessment</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-blue-800">Subcategories:</strong>
                        <ul className="text-blue-700 mt-1 space-y-1">
                          <li>• MEASURE-2.1: Data quality metrics</li>
                          <li>• MEASURE-2.3: Data representativeness</li>
                          <li>• MANAGE-2.1: Data governance controls</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Settings className="h-5 w-5 mr-2 text-blue-600" />
                        Key Tools
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Microsoft Purview
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Azure Active Directory
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Role-Based Access Control (RBAC)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Azure Encryption Services
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        Implementation Steps
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            1
                          </span>
                          Catalog & classify sensitive data
                        </li>
                        <li className="flex items-start">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            2
                          </span>
                          Restrict access by roles and responsibilities
                        </li>
                        <li className="flex items-start">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            3
                          </span>
                          Encrypt & mask critical data elements
                        </li>
                        <li className="flex items-start">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            4
                          </span>
                          Implement continuous monitoring
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Owner:</strong> Data Governance Lead / IT Security Team
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="model-lifecycle" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <Brain className="h-8 w-8 text-purple-600 mr-3" />
                    <div>
                      <CardTitle className="text-2xl">Model Lifecycle Management</CardTitle>
                      <CardDescription className="text-lg">
                        Comprehensive ML model development and deployment governance
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* NIST AI RMF Reference */}
                  <div className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <div className="flex items-center mb-2">
                      <ExternalLink className="h-4 w-4 text-purple-600 mr-2" />
                      <h4 className="font-semibold text-purple-800">NIST AI RMF 1.0 Alignment</h4>
                    </div>
                    <p className="text-purple-700 text-sm mb-3">
                      This phase aligns with NIST AI RMF <strong>MAP</strong>, <strong>MEASURE</strong>, and{" "}
                      <strong>MANAGE</strong> functions, covering the complete AI system lifecycle from design to
                      deployment.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-xs">
                      <div>
                        <strong className="text-purple-800">Key NIST Categories:</strong>
                        <ul className="text-purple-700 mt-1 space-y-1">
                          <li>• MAP-1.1: AI system context and purpose</li>
                          <li>• MAP-4.1: Model development practices</li>
                          <li>• MEASURE-1.1: Model performance metrics</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-purple-800">Subcategories:</strong>
                        <ul className="text-purple-700 mt-1 space-y-1">
                          <li>• MEASURE-3.1: Model validation</li>
                          <li>• MANAGE-1.1: Model deployment controls</li>
                          <li>• MANAGE-4.1: Model monitoring</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Settings className="h-5 w-5 mr-2 text-purple-600" />
                        Key Tools
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Azure Machine Learning
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Azure DevOps
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Responsible AI Toolbox
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          MLflow Integration
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        Implementation Steps
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            1
                          </span>
                          Log experiments & model versions
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            2
                          </span>
                          Automate testing & validation
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            3
                          </span>
                          Register models with metadata & lineage
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            4
                          </span>
                          Implement CI/CD for model deployment
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm text-purple-800">
                      <strong>Owner:</strong> ML Engineering / Data Science Team
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="risk-compliance" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <Shield className="h-8 w-8 text-red-600 mr-3" />
                    <div>
                      <CardTitle className="text-2xl">Risk & Compliance Management</CardTitle>
                      <CardDescription className="text-lg">
                        Continuous monitoring and compliance framework implementation
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* NIST AI RMF Reference */}
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center mb-2">
                      <ExternalLink className="h-4 w-4 text-red-600 mr-2" />
                      <h4 className="font-semibold text-red-800">NIST AI RMF 1.0 Alignment</h4>
                    </div>
                    <p className="text-red-700 text-sm mb-3">
                      This phase aligns with NIST AI RMF <strong>MEASURE</strong> and <strong>MANAGE</strong> functions,
                      focusing on continuous risk monitoring, incident response, and compliance management.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-xs">
                      <div>
                        <strong className="text-red-800">Key NIST Categories:</strong>
                        <ul className="text-red-700 mt-1 space-y-1">
                          <li>• MEASURE-2.2: Bias and fairness metrics</li>
                          <li>• MEASURE-4.1: Risk monitoring</li>
                          <li>• MANAGE-2.2: Risk mitigation</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-red-800">Subcategories:</strong>
                        <ul className="text-red-700 mt-1 space-y-1">
                          <li>• MANAGE-2.3: Risk response actions</li>
                          <li>• MANAGE-3.1: Incident response</li>
                          <li>• MANAGE-4.2: Performance monitoring</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Settings className="h-5 w-5 mr-2 text-red-600" />
                        Key Tools
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Azure Policy
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Microsoft Defender
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Azure Security Center
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Compliance Manager
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        Implementation Steps
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            1
                          </span>
                          Monitor model bias, drift, and threats
                        </li>
                        <li className="flex items-start">
                          <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            2
                          </span>
                          Set guardrails for model deployment
                        </li>
                        <li className="flex items-start">
                          <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            3
                          </span>
                          Integrate with compliance frameworks
                        </li>
                        <li className="flex items-start">
                          <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            4
                          </span>
                          Establish incident response procedures
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-red-50 rounded-lg">
                    <p className="text-sm text-red-800">
                      <strong>Owner:</strong> GRC & Security Teams
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="transparency-audit" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <Eye className="h-8 w-8 text-orange-600 mr-3" />
                    <div>
                      <CardTitle className="text-2xl">Transparency & Audit Implementation</CardTitle>
                      <CardDescription className="text-lg">
                        Provide comprehensive visibility, reporting, and audit capabilities
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* NIST AI RMF Reference */}
                  <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <div className="flex items-center mb-2">
                      <ExternalLink className="h-4 w-4 text-orange-600 mr-2" />
                      <h4 className="font-semibold text-orange-800">NIST AI RMF 1.0 Alignment</h4>
                    </div>
                    <p className="text-orange-700 text-sm mb-3">
                      This phase aligns with NIST AI RMF <strong>GOVERN</strong> and <strong>MANAGE</strong> functions,
                      ensuring transparency, explainability, and comprehensive documentation for audit purposes.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-xs">
                      <div>
                        <strong className="text-orange-800">Key NIST Categories:</strong>
                        <ul className="text-orange-700 mt-1 space-y-1">
                          <li>• GOVERN-5.1: Transparency and explainability</li>
                          <li>• MAP-1.2: System documentation</li>
                          <li>• MANAGE-1.2: Audit and review processes</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-orange-800">Subcategories:</strong>
                        <ul className="text-orange-700 mt-1 space-y-1">
                          <li>• GOVERN-1.3: Accountability mechanisms</li>
                          <li>• MEASURE-1.3: Performance reporting</li>
                          <li>• MANAGE-3.2: Documentation management</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Settings className="h-5 w-5 mr-2 text-orange-600" />
                        Key Tools
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Power BI Dashboards
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Azure Sentinel
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Azure Monitor
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Compliance Manager
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        Implementation Steps
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            1
                          </span>
                          Create comprehensive audit trail system
                        </li>
                        <li className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            2
                          </span>
                          Build executive reporting dashboards
                        </li>
                        <li className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            3
                          </span>
                          Implement model explainability features
                        </li>
                        <li className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-0.5">
                            4
                          </span>
                          Establish compliance reporting automation
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <strong>Primary Roles:</strong> Audit, Compliance, GRC Teams
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* NIST AI RMF Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">NIST AI Risk Management Framework Integration</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our implementation aligns with NIST AI RMF 1.0 core functions for comprehensive risk management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-blue-50">
              <CardHeader>
                <Crown className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-blue-800">GOVERN</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm">
                  Organizational structures, policies, and processes for AI risk management
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-200 bg-green-50">
              <CardHeader>
                <Database className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-green-800">MAP</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-sm">
                  Context establishment, categorization, and characterization of AI systems
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-purple-200 bg-purple-50">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle className="text-purple-800">MEASURE</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 text-sm">
                  Analysis, assessment, benchmarking, and monitoring of AI risks
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-red-200 bg-red-50">
              <CardHeader>
                <Shield className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle className="text-red-800">MANAGE</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 text-sm">
                  Allocation and oversight of resources to address AI risks on a regular basis
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg border">
            <div className="flex items-center mb-4">
              <ExternalLink className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">NIST AI RMF 1.0 Reference</h3>
            </div>
            <p className="text-gray-600 text-sm">
              The NIST AI Risk Management Framework (AI RMF 1.0) provides a comprehensive approach to managing risks
              associated with artificial intelligence. Our Azure AI Governance Program implementation directly maps to
              these core functions, ensuring compliance with established federal standards and best practices for AI
              risk management across the enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              NIST-aligned tooling and processes deliver measurable governance outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lock className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Enhanced Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Multi-layered security controls protect sensitive data and models</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Eye className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Full Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Complete audit trails and monitoring across the AI lifecycle</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Settings className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Standards Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">NIST AI RMF alignment ensures federal standards compliance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Organizational Impact?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Learn about roles, responsibilities, and benefits across your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/roles" className="flex items-center">
                View Roles & Benefits
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 bg-transparent">
              <Link href="/next-steps">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
