import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, FileCheck, BarChart3, ArrowRight, Users, ExternalLink, Crown, Database } from "lucide-react"
import Link from "next/link"

export default function FrameworkPage() {
  const phases = [
    {
      number: "I",
      title: "Foundation",
      focus: "Policies, Objectives, Training",
      roles: "Executives, Legal, Ethics, HR",
      description: "Establish governance charter, policies, strategic alignment, and comprehensive training programs",
      color: "bg-blue-500",
      nistFunction: "GOVERN",
      nistCategories: [
        "GOVERN-1.1: AI governance structure",
        "GOVERN-1.2: AI risk management strategy",
        "GOVERN-2.1: Roles and responsibilities",
        "GOVERN-3.1: AI risk tolerance",
        "GOVERN-4.1: Risk management processes",
        "GOVERN-6.1: AI risk monitoring",
      ],
      nistDescription:
        "Establishes organizational structures, policies, and processes for AI risk management across the enterprise.",
    },
    {
      number: "II",
      title: "Data Governance",
      focus: "Purview, AD, RBAC",
      roles: "Data Governance, IT",
      description: "Implement data cataloging, classification, and access controls",
      color: "bg-green-500",
      nistFunction: "MAP & MEASURE",
      nistCategories: [
        "MAP-2.3: Data quality and integrity",
        "MAP-3.3: Data privacy and security",
        "MAP-5.1: Impact assessment",
        "MEASURE-2.1: Data quality metrics",
        "MEASURE-2.3: Data representativeness",
        "MANAGE-2.1: Data governance controls",
      ],
      nistDescription: "Focuses on data quality, integrity, and privacy throughout the AI system lifecycle.",
    },
    {
      number: "III",
      title: "Model Lifecycle",
      focus: "Azure ML, DevOps",
      roles: "Data Science, ML Ops",
      description: "Manage model development, testing, and deployment processes",
      color: "bg-purple-500",
      nistFunction: "MAP, MEASURE & MANAGE",
      nistCategories: [
        "MAP-1.1: AI system context and purpose",
        "MAP-4.1: Model development practices",
        "MEASURE-1.1: Model performance metrics",
        "MEASURE-3.1: Model validation",
        "MANAGE-1.1: Model deployment controls",
        "MANAGE-4.1: Model monitoring",
      ],
      nistDescription: "Covers the complete AI system lifecycle from design through deployment and ongoing monitoring.",
    },
    {
      number: "IV",
      title: "Risk & Compliance",
      focus: "Policy, Defender",
      roles: "GRC, Security Ops",
      description: "Monitor risks, implement guardrails, and ensure compliance",
      color: "bg-red-500",
      nistFunction: "MEASURE & MANAGE",
      nistCategories: [
        "MEASURE-2.2: Bias and fairness metrics",
        "MEASURE-4.1: Risk monitoring",
        "MANAGE-2.2: Risk mitigation",
        "MANAGE-2.3: Risk response actions",
        "MANAGE-3.1: Incident response",
        "MANAGE-4.2: Performance monitoring",
      ],
      nistDescription: "Focuses on continuous risk monitoring, incident response, and compliance management.",
    },
    {
      number: "V",
      title: "Transparency & Audit",
      focus: "Power BI, Sentinel",
      roles: "Audit, Compliance",
      description: "Provide visibility, reporting, and audit capabilities",
      color: "bg-orange-500",
      nistFunction: "GOVERN & MANAGE",
      nistCategories: [
        "GOVERN-5.1: Transparency and explainability",
        "MAP-1.2: System documentation",
        "MANAGE-1.2: Audit and review processes",
        "GOVERN-1.3: Accountability mechanisms",
        "MEASURE-1.3: Performance reporting",
        "MANAGE-3.2: Documentation management",
      ],
      nistDescription: "Ensures transparency, explainability, and comprehensive documentation for audit purposes.",
    },
  ]

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
              <Link href="/framework" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
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

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Governance Framework</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Five-Phase Implementation
            <span className="text-blue-600"> Framework</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A structured approach aligned with NIST AI Risk Management Framework for implementing comprehensive AI
            governance
          </p>
        </div>
      </section>

      {/* NIST AI RMF Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">NIST AI Risk Management Framework Alignment</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our five-phase framework directly maps to NIST AI RMF 1.0 core functions for comprehensive risk management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-blue-50">
              <CardHeader>
                <Crown className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-blue-800">GOVERN</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm mb-3">
                  Organizational structures, policies, and processes for AI risk management
                </p>
                <Badge variant="outline" className="text-xs">
                  Phase I: Foundation
                </Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-200 bg-green-50">
              <CardHeader>
                <Database className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-green-800">MAP</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-sm mb-3">
                  Context establishment, categorization, and characterization of AI systems
                </p>
                <Badge variant="outline" className="text-xs">
                  Phases II & III
                </Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-purple-200 bg-purple-50">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle className="text-purple-800">MEASURE</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 text-sm mb-3">
                  Analysis, assessment, benchmarking, and monitoring of AI risks
                </p>
                <Badge variant="outline" className="text-xs">
                  Phases III & IV
                </Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-red-200 bg-red-50">
              <CardHeader>
                <Shield className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle className="text-red-800">MANAGE</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 text-sm mb-3">
                  Allocation and oversight of resources to address AI risks on a regular basis
                </p>
                <Badge variant="outline" className="text-xs">
                  Phases IV & V
                </Badge>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
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

      {/* Framework Phases with NIST References */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={phase.number} className="relative">
                {/* Connector Line */}
                {index < phases.length - 1 && (
                  <div className="absolute left-8 top-32 w-0.5 h-16 bg-gray-300 hidden md:block"></div>
                )}

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div
                        className={`${phase.color} text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold flex-shrink-0`}
                      >
                        {phase.number}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <CardTitle className="text-2xl mr-3">{phase.title}</CardTitle>
                          <Badge className="bg-indigo-100 text-indigo-800 text-xs">NIST: {phase.nistFunction}</Badge>
                        </div>
                        <CardDescription className="text-lg mb-4">{phase.description}</CardDescription>

                        {/* NIST Alignment Section */}
                        <div className="mb-4 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                          <div className="flex items-center mb-2">
                            <ExternalLink className="h-4 w-4 text-indigo-600 mr-2" />
                            <h4 className="font-semibold text-indigo-800">NIST AI RMF Alignment</h4>
                          </div>
                          <p className="text-indigo-700 text-sm mb-3">{phase.nistDescription}</p>
                          <div className="grid md:grid-cols-2 gap-2">
                            {phase.nistCategories.map((category, idx) => (
                              <div key={idx} className="text-xs text-indigo-700 flex items-start">
                                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                {category}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <div>
                            <Badge variant="outline" className="mb-2">
                              Focus: {phase.focus}
                            </Badge>
                          </div>
                          <div>
                            <Badge variant="secondary">Primary Roles: {phase.roles}</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Benefits with NIST Context */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">NIST-Aligned Framework Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Structured implementation ensures comprehensive coverage and measurable outcomes aligned with federal
              standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Risk Mitigation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">Systematic approach to identifying and managing AI risks</p>
                <Badge variant="outline" className="text-xs">
                  NIST: MEASURE & MANAGE
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileCheck className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Standards Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">Built-in compliance with NIST AI RMF and regulatory requirements</p>
                <Badge variant="outline" className="text-xs">
                  NIST: GOVERN
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Measurable Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">Clear milestones and success metrics for each phase</p>
                <Badge variant="outline" className="text-xs">
                  NIST: MEASURE
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Stakeholder Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">Clear roles and responsibilities across departments</p>
                <Badge variant="outline" className="text-xs">
                  NIST: GOVERN
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NIST Compliance Mapping */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">NIST AI RMF Compliance Mapping</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive mapping of framework phases to NIST AI RMF categories and subcategories
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-300 bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left font-semibold">Framework Phase</th>
                  <th className="border border-gray-300 p-3 text-center font-semibold">NIST Function</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Primary Categories</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Key Outcomes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">
                    <div className="flex items-center">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-2">
                        I
                      </div>
                      <strong>Foundation</strong>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-3 text-center">
                    <Badge className="bg-blue-100 text-blue-800">GOVERN</Badge>
                  </td>
                  <td className="border border-gray-300 p-3 text-xs">
                    GOVERN-1.1, GOVERN-1.2, GOVERN-2.1, GOVERN-3.1, GOVERN-4.1, GOVERN-6.1
                  </td>
                  <td className="border border-gray-300 p-3 text-xs">
                    Governance structure, risk strategy, roles defined, risk tolerance established
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">
                    <div className="flex items-center">
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-2">
                        II
                      </div>
                      <strong>Data Governance</strong>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-3 text-center">
                    <Badge className="bg-green-100 text-green-800">MAP/MEASURE</Badge>
                  </td>
                  <td className="border border-gray-300 p-3 text-xs">
                    MAP-2.3, MAP-3.3, MAP-5.1, MEASURE-2.1, MEASURE-2.3, MANAGE-2.1
                  </td>
                  <td className="border border-gray-300 p-3 text-xs">
                    Data quality assured, privacy protected, governance controls implemented
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">
                    <div className="flex items-center">
                      <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-2">
                        III
                      </div>
                      <strong>Model Lifecycle</strong>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-3 text-center">
                    <Badge className="bg-purple-100 text-purple-800">MAP/MEASURE/MANAGE</Badge>
                  </td>
                  <td className="border border-gray-300 p-3 text-xs">
                    MAP-1.1, MAP-4.1, MEASURE-1.1, MEASURE-3.1, MANAGE-1.1, MANAGE-4.1
                  </td>
                  <td className="border border-gray-300 p-3 text-xs">
                    System context defined, performance measured, deployment controlled, monitoring active
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">
                    <div className="flex items-center">
                      <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-2">
                        IV
                      </div>
                      <strong>Risk & Compliance</strong>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-3 text-center">
                    <Badge className="bg-red-100 text-red-800">MEASURE/MANAGE</Badge>
                  </td>
                  <td className="border border-gray-300 p-3 text-xs">
                    MEASURE-2.2, MEASURE-4.1, MANAGE-2.2, MANAGE-2.3, MANAGE-3.1, MANAGE-4.2
                  </td>
                  <td className="border border-gray-300 p-3 text-xs">
                    Bias monitored, risks mitigated, incidents managed, performance tracked
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">
                    <div className="flex items-center">
                      <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-2">
                        V
                      </div>
                      <strong>Transparency & Audit</strong>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-3 text-center">
                    <Badge className="bg-orange-100 text-orange-800">GOVERN/MANAGE</Badge>
                  </td>
                  <td className="border border-gray-300 p-3 text-xs">
                    GOVERN-5.1, MAP-1.2, MANAGE-1.2, GOVERN-1.3, MEASURE-1.3, MANAGE-3.2
                  </td>
                  <td className="border border-gray-300 p-3 text-xs">
                    Transparency ensured, documentation maintained, accountability established
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Start NIST-Aligned Implementation?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Learn about the detailed implementation approach for each NIST-aligned phase
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/implementation" className="flex items-center">
                View Implementation Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 bg-transparent">
              <Link href="/roles">Explore Roles & Benefits</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
