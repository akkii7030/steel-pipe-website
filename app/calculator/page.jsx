"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"

export default function WeightCalculatorPage() {
  const { language, translations } = useLanguage()
  const [pipeType, setPipeType] = useState("circular")
  const [material, setMaterial] = useState("carbon-steel")
  const [outerDiameter, setOuterDiameter] = useState(114.3) // mm
  const [wallThickness, setWallThickness] = useState(6.02) // mm
  const [length, setLength] = useState(1) // meters
  const [weight, setWeight] = useState(0)
  const [weightPerMeter, setWeightPerMeter] = useState(0)

  // Material densities in kg/m³
  const densities = {
    "carbon-steel": 7850,
    "stainless-steel": 7930,
    "duplex-steel": 7800,
    "alloy-steel": 7870,
  }

  // Calculate weight when inputs change
  useEffect(() => {
    calculateWeight()
  }, [pipeType, material, outerDiameter, wallThickness, length])

  const calculateWeight = () => {
    const density = densities[material]
    let weightResult = 0
    let weightPerMeterResult = 0

    if (pipeType === "circular") {
      // Convert mm to m for calculation
      const outerRadiusM = outerDiameter / 2000
      const innerRadiusM = (outerDiameter - 2 * wallThickness) / 2000

      // Volume = π * (outer radius² - inner radius²) * length
      const volume = Math.PI * (Math.pow(outerRadiusM, 2) - Math.pow(innerRadiusM, 2)) * length

      // Weight = Volume * Density
      weightResult = volume * density
      weightPerMeterResult = weightResult / length
    } else if (pipeType === "square") {
      // For square/rectangular pipes
      // Convert mm to m
      const outerWidthM = outerDiameter / 1000
      const innerWidthM = (outerDiameter - 2 * wallThickness) / 1000

      // Volume = (outer width² - inner width²) * length
      const volume = (Math.pow(outerWidthM, 2) - Math.pow(innerWidthM, 2)) * length

      // Weight = Volume * Density
      weightResult = volume * density
      weightPerMeterResult = weightResult / length
    }

    setWeight(weightResult.toFixed(2))
    setWeightPerMeter(weightPerMeterResult.toFixed(2))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">Steel Pipe Weight Calculator</h1>
      <p className="text-gray-600 mb-8 text-lg">Calculate the weight of steel pipes based on dimensions and material</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Input Parameters</h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Pipe Type</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="pipeType"
                  value="circular"
                  checked={pipeType === "circular"}
                  onChange={() => setPipeType("circular")}
                  className="mr-2"
                />
                Circular Pipe
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="pipeType"
                  value="square"
                  checked={pipeType === "square"}
                  onChange={() => setPipeType("square")}
                  className="mr-2"
                />
                Square/Rectangular Pipe
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Material</label>
            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="carbon-steel">Carbon Steel</option>
              <option value="stainless-steel">Stainless Steel</option>
              <option value="duplex-steel">Duplex Steel</option>
              <option value="alloy-steel">Alloy Steel</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              {pipeType === "circular" ? "Outer Diameter (mm)" : "Outer Width (mm)"}
            </label>
            <input
              type="number"
              value={outerDiameter}
              onChange={(e) => setOuterDiameter(Number.parseFloat(e.target.value) || 0)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
              step="0.1"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Wall Thickness (mm)</label>
            <input
              type="number"
              value={wallThickness}
              onChange={(e) => setWallThickness(Number.parseFloat(e.target.value) || 0)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
              step="0.01"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Length (meters)</label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(Number.parseFloat(e.target.value) || 0)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
              step="0.1"
            />
          </div>

          <button
            onClick={calculateWeight}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium transition-colors duration-300 w-full"
          >
            Calculate Weight
          </button>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Results</h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 mb-1">Weight per Meter</p>
                <p className="text-3xl font-bold text-blue-600">{weightPerMeter} kg/m</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 mb-1">Total Weight</p>
                <p className="text-3xl font-bold text-blue-600">{weight} kg</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">How It Works</h2>

            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/Calculator.jpg"
                alt="Pipe weight calculation diagram"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-gray-600 mb-4">The weight of a steel pipe is calculated using the following formula:</p>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-mono text-center">Weight = π × (OD² - ID²) × 0.02466 × Length</p>
            </div>

            <p className="text-gray-600">Where:</p>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>OD = Outer Diameter in mm</li>
              <li>ID = Inner Diameter in mm (OD - 2 × Wall Thickness)</li>
              <li>0.02466 = Conversion factor for steel density</li>
              <li>Length = Pipe length in meters</li>
            </ul>

            <p className="text-gray-600">
              Different materials have different densities, which affects the final weight calculation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

