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

  useEffect(() => {
    calculateWeight()
  }, [pipeType, material, outerDiameter, wallThickness, length])

  const calculateWeight = () => {
    const density = densities[material]
    let weightResult = 0
    let weightPerMeterResult = 0

    if (pipeType === "circular") {
      const outerRadiusM = outerDiameter / 2000
      const innerRadiusM = (outerDiameter - 2 * wallThickness) / 2000
      const volume = Math.PI * (Math.pow(outerRadiusM, 2) - Math.pow(innerRadiusM, 2)) * length
      weightResult = volume * density
      weightPerMeterResult = weightResult / length
    } else if (pipeType === "square") {
      const outerWidthM = outerDiameter / 1000
      const innerWidthM = (outerDiameter - 2 * wallThickness) / 1000
      const volume = (Math.pow(outerWidthM, 2) - Math.pow(innerWidthM, 2)) * length
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
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="pipeType"
                  value="circular"
                  checked={pipeType === "circular"}
                  onChange={() => setPipeType("circular")}
                  className="mr-2 cursor-pointer"
                />
                Circular Pipe
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="pipeType"
                  value="square"
                  checked={pipeType === "square"}
                  onChange={() => setPipeType("square")}
                  className="mr-2 cursor-pointer"
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
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="carbon-steel">Carbon Steel</option>
              <option value="stainless-steel">Stainless Steel</option>
              <option value="duplex-steel">Duplex Steel</option>
              <option value="alloy-steel">Alloy Steel</option>
            </select>
          </div>

          <button
            onClick={calculateWeight}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium transition-colors duration-300 w-full cursor-pointer"
          >
            Calculate Weight
          </button>
        </div>
      </div>
    </div>
  )
}