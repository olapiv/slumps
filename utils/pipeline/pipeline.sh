#!/bin/bash

# Download wabt releases


name=$(echo $1 | sed 's/\.[^.]*$//')
ext=$(echo $1 | sed 's/^.*\.//')

if [ "${ext}" == "c" ]; then
  echo "### step c2ll \c"
  clang -S -emit-llvm ${name}.c -o ${name}.ll
  ext='ll'
  echo "okay"
fi

if [ "${ext}" == "rs" ]; then
  echo "### step rs2ll \c"
  rustc  --emit=llvm-ir ${name}.rs -o ${name}.ll
  ext='ll'
  echo "okay"
fi

if [ "${ext}" == "ll" ]; then
  echo "### step ll2bc \c"
  llvm-as ${name}.ll
  ext='bc'
  echo "okay"
fi

if [ "${ext}" == "bc" ]; then
  echo "### step bc2candopt \c"
  if [ ! -d "../../souper/build/souper" ]; then
    cd ../../souper
    if [ ! -d "./third_party" ]; then
      ./build_deps.sh $buildtype $extra_cmake_flags
    fi

    mkdir build
    cd build
    echo "Building..."
    cmake  ../
    make
    cd ../../utils/pipeline
  fi
  ../../souper/build/souper -z3-path=/usr/bin/z3 ${name}.bc > ${name}.candopt
  ext='candopt'
  echo "okay"
fi

if [ "${ext}" == "candopt" ]; then
  echo "### step candopt2lhsopt \c"
  ../../souper/build/souper-check -z3-path=/usr/bin/z3 -print-replacement-split ${name}.candopt > ${name}.lhsopt
  sed -i '/^result/d' ${name}.lhsopt
  ext='lhsopt'
  echo "okay"
fi

if [ "${ext}" == "lhsopt" ]; then
 
  
  echo "### step lhsopt2rhsopt \c"
  ../../souper/build/souper-check -z3-path=/usr/bin/z3 -infer-rhs -souper-infer-iN ${name}.lhsopt > ${name}.rhsopt
  ext='rhsopt'
  echo "okay"
fi

if [ "${ext}" == "rhsopt" ]; then
  echo "### step rhsopt2ll \c"
  # python souper2llvm.py ${name}.rhsopt > ${name}.ll
  ../../souper/build/souper2llvm ${name}.rhsopt > ${name}.ll
  ext='ll'
  echo "okay"
fi

if [ "${ext}" == "candopt" ]; then
  echo "### step check candopt \c"
  ../../souper/build/souper-check -z3-path=/usr/bin/z3 ${name}.candopt
  ext='candopt'
  echo "okay"
fi

# echo "### extra ll2s \c"
# llc -march=wasm32 -filetype=asm ${name}.ll
# echo "okay"

# echo "### extra ll2o \c"
# llc -march=wasm32 -filetype=obj ${name}.ll
# echo "okay"
