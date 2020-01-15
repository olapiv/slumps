
import os
os.chdir("..")

import stages
import slumps

BASEDIR = os.path.dirname(__file__)

def test_ctoll():
    ctoll = stages.CToLLStage()

    result = ctoll("%s/benchmarks/babbage_problem.c"%(BASEDIR, )) # Send llvm IR to std

    open("%s/results/babbage_problem.ll"%(BASEDIR,), 'wb').write(result)



def test_lltobc():
    # Receive a LLVM IR in the std
    lltobc = stages.LLToBC()

    result = lltobc(std=open("%s/results/babbage_problem.ll"%(BASEDIR,), 'rb').read()) # Send llvm IR to std

    open("%s/results/babbage_problem.bc"%(BASEDIR,), 'wb').write(result)

def test_bctoSouperCandidates():
    # Receive a LLVM IR in the std
    bctoSouper = stages.BCCountCandidates()
    content = open("%s/results/babbage_problem.bc" % (BASEDIR,), 'rb').read()

    bctoSouper(args=["%s/results/babbage_problem.bc" % (BASEDIR,)],
               std=None)  # Send llvm IR to std

    # open("%s/results/babbage_problem.opt.bc"%(BASEDIR,), 'wb').write(opt)


def test_BCSouperPass():
    # Receive a LLVM IR in the std
    bctoSouper = stages.BCToSouper(candidates=[1,3])
    content = open("%s/results/babbage_problem.bc"%(BASEDIR,), 'rb').read()

    bctoSouper(args=["%s/results/babbage_problem.bc"%(BASEDIR,), "%s/results/babbage_problem.opt.bc"%(BASEDIR,)], std=None) # Send llvm IR to std

    # open("%s/results/babbage_problem.opt.bc"%(BASEDIR,), 'wb').write(opt)


def test_bctoWasm():
    # Receive a LLVM IR in the std
    bt2wasm = stages.ObjtoWASM()

    bt2wasm( args=["%s/results/babbage_problem.wasm"%(BASEDIR,),
                      "%s/results/babbage_problem.bc"%(BASEDIR,)]) # Send llvm IR to std



def test_WASM2WAT():
    # Receive a LLVM IR in the std
    wasm2wat = stages.WASM2WAT()

    wasm2wat( args=["%s/results/babbage_problem.wasm"%(BASEDIR,),
                      "%s/results/babbage_problem.wat"%(BASEDIR,)]) # Send llvm IR to std






def test_pipeline():
    # Receive a LLVM IR in the std
    p = slumps.Pipeline()
    p.process("%s/benchmarks/babbage_problem.c"%(BASEDIR, ))


