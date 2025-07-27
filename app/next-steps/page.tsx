import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, Users, Rocket, ArrowRight, Calendar, FileText, Target, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function NextStepsPage() {
  const steps = [
    {
      number: "01",
      title: "Executive Approval",
      description: "Secure executive approval of governance charter and strategic alignment",
      icon: FileText,
      color: "bg-blue-500",
      tasks: [
        "Present business case to executive leadership",
        "Define governance charter and objectives",
        "Secure budget and resource allocation",
        "Establish governance committee",
      ],
    },
    {
      number: "02",
      title: "Core Team Assignment",
      description: "Assign dedicated governance team with clear roles and responsibilities",
      icon: Users,
      color: "bg-green-500",
      tasks: [
        "Identify governance team leads from each department",
        "Define roles and responsibilities matrix",
        "Establish communication protocols",
        "Set up regular governance meetings",
      ],
    },
    {
      number: "03",
      title: "Pilot Implementation",
      description: "Launch pilot program with select AI models to validate approach",
      icon: Target,
      color: "bg-purple-500",
      tasks: [
        "Select 2-3 AI models for pilot program",
        "Implement governance framework for pilot models",
        "Establish monitoring and reporting processes",
        "Collect feedback and iterate on approach",
      ],
    },
    {
      number: "04",
      title: "Enterprise Rollout",
      description: "Scale governance framework across all lines of business",
      icon: Rocket,
      color: "bg-orange-500",
      tasks: [
        "Develop rollout plan for all LOBs",
        "Train teams on governance processes",
        "Implement enterprise-wide monitoring",
        "Establish continuous improvement process",
      ],
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
              <Link href="/framework" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Framework
              </Link>
              <Link href="/implementation" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Implementation
              </Link>
              <Link href="/roles" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Roles & Benefits
              </Link>
              <Link href="/next-steps" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Next Steps
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Implementation Roadmap</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your AI Governance
            <span className="text-blue-600"> Next Steps</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A clear roadmap to operationalize responsible AI at scale in your organization
          </p>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={step.number} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-24 w-0.5 h-16 bg-gray-300 hidden md:block"></div>
                  )}

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start space-x-6">
                        <div
                          className={`${step.color} text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold flex-shrink-0`}
                        >
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <IconComponent className="h-6 w-6 text-gray-600 mr-2" />
                            <CardTitle className="text-2xl">{step.title}</CardTitle>
                          </div>
                          <CardDescription className="text-lg mb-6">{step.description}</CardDescription>
                          <div className="grid md:grid-cols-2 gap-3">
                            {step.tasks.map((task, taskIndex) => (
                              <div key={taskIndex} className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{task}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Timeline</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Typical timeline for full AI governance implementation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow border-blue-200 bg-blue-50">
              <CardHeader>
                <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-blue-800">Weeks 1-2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 font-medium">Executive Approval</p>
                <p className="text-blue-600 text-sm mt-2">Charter development and leadership alignment</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-green-200 bg-green-50">
              <CardHeader>
                <Calendar className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-green-800">Weeks 3-4</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 font-medium">Team Assignment</p>
                <p className="text-green-600 text-sm mt-2">Role definition and team formation</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-purple-200 bg-purple-50">
              <CardHeader>
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-purple-800">Weeks 5-12</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 font-medium">Pilot Implementation</p>
                <p className="text-purple-600 text-sm mt-2">Select models and validate approach</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-orange-200 bg-orange-50">
              <CardHeader>
                <Calendar className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-orange-800">Weeks 13-24</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-700 font-medium">Enterprise Rollout</p>
                <p className="text-orange-600 text-sm mt-2">Scale across all business units</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Metrics</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key performance indicators to measure governance effectiveness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Risk Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Compliance violations: 0</li>
                  <li>• Security incidents: {"<"}5% baseline</li>
                  <li>• Model bias detection: {">"} 95%</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Process Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Deployment time: -50%</li>
                  <li>• Compliance overhead: -40%</li>
                  <li>• Audit preparation: -60%</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Model Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Model accuracy: +15%</li>
                  <li>• Fairness metrics: {">"} 90%</li>
                  <li>• Stakeholder trust: +25%</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Let's Discuss Your AI Governance Journey</h2>
          <p className="text-xl text-blue-100 mb-8">
            Ready to operationalize responsible AI at scale? Our experts are here to help you get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <MessageCircle className="mr-2 h-4 w-4" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 bg-transparent">
              <Link href="/" className="flex items-center">
                Back to Overview
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">AI Governance</span>
              </div>
              <p className="text-gray-400">
                Building responsible, compliant, and secure AI in the enterprise with Azure.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Framework</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/framework" className="hover:text-white">
                    Five-Phase Approach
                  </Link>
                </li>
                <li>
                  <Link href="/implementation" className="hover:text-white">
                    Implementation Details
                  </Link>
                </li>
                <li>
                  <Link href="/roles" className="hover:text-white">
                    Roles & Benefits
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Best Practices
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Training
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Governance Program. Built for Azure enterprise environments.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
