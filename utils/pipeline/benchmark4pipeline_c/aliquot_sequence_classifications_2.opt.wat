(module
  (type (;0;) (func (param i32 i32) (result i32)))
  (type (;1;) (func (param i32 i32 i32) (result i32)))
  (type (;2;) (func (param i32 i32 i32) (result i64)))
  (type (;3;) (func (param i32) (result i32)))
  (type (;4;) (func))
  (type (;5;) (func (param i64 i64) (result i64)))
  (type (;6;) (func (param i64) (result i64)))
  (type (;7;) (func (param i32 i32 i32)))
  (type (;8;) (func (param i64)))
  (type (;9;) (func (param i32)))
  (import "env" "printf" (func $printf (type 0)))
  (import "env" "fopen" (func $fopen (type 0)))
  (import "env" "fgets" (func $fgets (type 1)))
  (import "env" "strtoull" (func $strtoull (type 2)))
  (import "env" "fclose" (func $fclose (type 3)))
  (import "env" "strchr" (func $strchr (type 0)))
  (func $__wasm_call_ctors (type 4))
  (func $raiseTo (type 5) (param i64 i64) (result i64)
    (local i64)
    i64.const 1
    local.set 2
    block  ;; label = @1
      local.get 1
      i64.eqz
      br_if 0 (;@1;)
      loop  ;; label = @2
        local.get 2
        local.get 0
        i64.mul
        local.set 2
        local.get 1
        i64.const -1
        i64.add
        local.tee 1
        i64.const 0
        i64.ne
        br_if 0 (;@2;)
      end
    end
    local.get 2)
  (func $properDivisorSum (type 6) (param i64) (result i64)
    (local i64 i64 i64 i64 i64 i64)
    i64.const 1
    local.set 1
    local.get 0
    local.set 2
    block  ;; label = @1
      local.get 0
      i32.wrap_i64
      i32.const 1
      i32.and
      br_if 0 (;@1;)
      i64.const -1
      local.set 3
      local.get 0
      local.set 4
      loop  ;; label = @2
        local.get 3
        i64.const 1
        i64.add
        local.set 3
        local.get 4
        i64.const 2
        i64.and
        local.set 5
        local.get 4
        i64.const 1
        i64.shr_u
        local.tee 2
        local.set 4
        local.get 5
        i64.eqz
        br_if 0 (;@2;)
      end
      block  ;; label = @2
        local.get 3
        i64.const -1
        i64.eq
        br_if 0 (;@2;)
        i64.const -2
        local.set 4
        i64.const 0
        local.set 1
        local.get 3
        i64.const -2
        i64.eq
        br_if 1 (;@1;)
        i64.const 1
        local.set 5
        loop  ;; label = @3
          local.get 5
          i64.const 1
          i64.shl
          local.set 5
          local.get 3
          local.get 4
          i64.const 1
          i64.add
          local.tee 4
          i64.ne
          br_if 0 (;@3;)
        end
        local.get 5
        i64.const -1
        i64.add
        local.set 1
        br 1 (;@1;)
      end
      i64.const 1
      local.set 1
    end
    block  ;; label = @1
      local.get 2
      i64.const 9
      i64.lt_u
      br_if 0 (;@1;)
      i64.const 3
      local.set 4
      loop  ;; label = @2
        block  ;; label = @3
          local.get 2
          local.get 4
          i64.rem_u
          i64.const 0
          i64.ne
          br_if 0 (;@3;)
          i64.const 1
          local.set 3
          i64.const 2
          local.set 5
          loop  ;; label = @4
            local.get 5
            local.tee 6
            i64.const 1
            i64.add
            local.set 5
            local.get 3
            i64.const 1
            i64.add
            local.set 3
            local.get 2
            local.get 4
            i64.div_u
            local.tee 2
            local.get 4
            i64.rem_u
            i64.eqz
            br_if 0 (;@4;)
          end
          local.get 3
          i64.const -2
          i64.add
          local.tee 5
          i64.const -1
          i64.eq
          br_if 0 (;@3;)
          block  ;; label = @4
            local.get 5
            i64.const 0
            i64.ne
            br_if 0 (;@4;)
            local.get 4
            i64.const 1
            i64.add
            local.get 1
            i64.mul
            local.set 1
            br 1 (;@3;)
          end
          i64.const 1
          local.set 5
          block  ;; label = @4
            local.get 3
            i64.eqz
            br_if 0 (;@4;)
            loop  ;; label = @5
              local.get 5
              local.get 4
              i64.mul
              local.set 5
              local.get 6
              i64.const -1
              i64.add
              local.tee 6
              i64.const 0
              i64.ne
              br_if 0 (;@5;)
            end
          end
          local.get 5
          i64.const -1
          i64.add
          local.get 4
          i64.const -1
          i64.add
          i64.div_u
          local.get 1
          i64.mul
          local.set 1
        end
        local.get 4
        i64.const 2
        i64.add
        local.tee 4
        local.get 4
        i64.mul
        local.get 2
        i64.le_u
        br_if 0 (;@2;)
      end
    end
    local.get 2
    i64.const 1
    i64.add
    i64.const 1
    local.get 2
    i64.const 2
    i64.gt_u
    select
    local.get 1
    i64.mul
    local.get 0
    i64.sub)
  (func $printSeries (type 7) (param i32 i32 i32)
    (local i32 i64)
    global.get 0
    i32.const 48
    i32.sub
    local.tee 3
    global.set 0
    local.get 0
    i64.load
    local.set 4
    local.get 3
    local.get 2
    i32.store offset=40
    local.get 3
    local.get 4
    i64.store offset=32
    i32.const 1024
    local.get 3
    i32.const 32
    i32.add
    call $printf
    drop
    local.get 0
    i64.load
    local.set 4
    block  ;; label = @1
      local.get 1
      i32.const -1
      i32.add
      local.tee 1
      i32.const 1
      i32.lt_s
      br_if 0 (;@1;)
      local.get 0
      i32.const 8
      i32.add
      local.set 0
      loop  ;; label = @2
        local.get 3
        local.get 4
        i64.store offset=16
        i32.const 1062
        local.get 3
        i32.const 16
        i32.add
        call $printf
        drop
        local.get 0
        i64.load
        local.set 4
        local.get 0
        i32.const 8
        i32.add
        local.set 0
        local.get 1
        i32.const -1
        i32.add
        local.tee 1
        br_if 0 (;@2;)
      end
    end
    local.get 3
    local.get 4
    i64.store
    i32.const 1069
    local.get 3
    call $printf
    drop
    local.get 3
    i32.const 48
    i32.add
    global.set 0)
  (func $aliquotClassifier (type 8) (param i64)
    (local i32 i32 i32 i64 i32 i64 i64 i32 i64 i64 i64 i64 i64 i32)
    global.get 0
    i32.const 272
    i32.sub
    local.tee 1
    global.set 0
    local.get 1
    local.get 0
    i64.store offset=144
    local.get 1
    i32.const 144
    i32.add
    i32.const 8
    i32.or
    local.set 2
    i32.const 2
    local.set 3
    local.get 0
    local.set 4
    i32.const 1
    local.set 5
    block  ;; label = @1
      block  ;; label = @2
        block  ;; label = @3
          loop  ;; label = @4
            local.get 3
            local.set 8
            local.get 4
            local.set 7
            i64.const 1
            local.set 6
            block  ;; label = @5
              block  ;; label = @6
                block  ;; label = @7
                  local.get 4
                  i32.wrap_i64
                  i32.const 1
                  i32.and
                  br_if 0 (;@7;)
                  i64.const 1
                  local.set 9
                  i64.const 2
                  local.set 10
                  local.get 4
                  local.set 11
                  loop  ;; label = @8
                    local.get 10
                    local.tee 12
                    i64.const 1
                    i64.add
                    local.set 10
                    local.get 9
                    i64.const 1
                    i64.add
                    local.set 9
                    local.get 11
                    i64.const 2
                    i64.and
                    local.set 13
                    local.get 11
                    i64.const 1
                    i64.shr_u
                    local.tee 7
                    local.set 11
                    local.get 13
                    i64.eqz
                    br_if 0 (;@8;)
                  end
                  i64.const 1
                  local.set 6
                  local.get 9
                  i64.const 1
                  i64.eq
                  br_if 0 (;@7;)
                  block  ;; label = @8
                    local.get 9
                    i64.eqz
                    i32.eqz
                    br_if 0 (;@8;)
                    i64.const 0
                    local.set 6
                    local.get 7
                    i64.const 9
                    i64.ge_u
                    br_if 2 (;@6;)
                    br 3 (;@5;)
                  end
                  i64.const 1
                  local.set 11
                  loop  ;; label = @8
                    local.get 11
                    i64.const 1
                    i64.shl
                    local.set 11
                    local.get 12
                    i64.const -1
                    i64.add
                    local.tee 12
                    i64.const 0
                    i64.ne
                    br_if 0 (;@8;)
                  end
                  local.get 11
                  i64.const -1
                  i64.add
                  local.set 6
                end
                local.get 7
                i64.const 9
                i64.lt_u
                br_if 1 (;@5;)
              end
              i64.const 3
              local.set 11
              loop  ;; label = @6
                block  ;; label = @7
                  local.get 7
                  local.get 11
                  i64.rem_u
                  i64.const 0
                  i64.ne
                  br_if 0 (;@7;)
                  i64.const 1
                  local.set 9
                  i64.const 2
                  local.set 10
                  loop  ;; label = @8
                    local.get 10
                    local.tee 13
                    i64.const 1
                    i64.add
                    local.set 10
                    local.get 9
                    i64.const 1
                    i64.add
                    local.set 9
                    local.get 7
                    local.get 11
                    i64.div_u
                    local.tee 7
                    local.get 11
                    i64.rem_u
                    i64.eqz
                    br_if 0 (;@8;)
                  end
                  local.get 9
                  i64.const -2
                  i64.add
                  local.tee 10
                  i64.const -1
                  i64.eq
                  br_if 0 (;@7;)
                  block  ;; label = @8
                    local.get 10
                    i64.const 0
                    i64.ne
                    br_if 0 (;@8;)
                    local.get 6
                    local.get 11
                    i64.const 1
                    i64.add
                    i64.mul
                    local.set 6
                    br 1 (;@7;)
                  end
                  i64.const 1
                  local.set 10
                  block  ;; label = @8
                    local.get 9
                    i64.eqz
                    br_if 0 (;@8;)
                    loop  ;; label = @9
                      local.get 10
                      local.get 11
                      i64.mul
                      local.set 10
                      local.get 13
                      i64.const -1
                      i64.add
                      local.tee 13
                      i64.const 0
                      i64.ne
                      br_if 0 (;@9;)
                    end
                  end
                  local.get 10
                  i64.const -1
                  i64.add
                  local.get 11
                  i64.const -1
                  i64.add
                  i64.div_u
                  local.get 6
                  i64.mul
                  local.set 6
                end
                local.get 11
                i64.const 2
                i64.add
                local.tee 11
                local.get 11
                i64.mul
                local.get 7
                i64.le_u
                br_if 0 (;@6;)
              end
            end
            local.get 1
            i32.const 144
            i32.add
            local.get 5
            i32.const 3
            i32.shl
            i32.add
            local.get 7
            i64.const 1
            i64.add
            i64.const 1
            local.get 7
            i64.const 2
            i64.gt_u
            select
            local.get 6
            i64.mul
            local.get 4
            i64.sub
            local.tee 11
            i64.store
            local.get 11
            local.get 4
            i64.eq
            local.tee 3
            br_if 2 (;@2;)
            local.get 11
            i64.eqz
            br_if 2 (;@2;)
            local.get 11
            local.get 0
            i64.eq
            br_if 2 (;@2;)
            block  ;; label = @5
              local.get 5
              i32.const 2
              i32.lt_u
              br_if 0 (;@5;)
              i32.const 1
              local.set 14
              local.get 2
              local.set 3
              loop  ;; label = @6
                local.get 3
                i64.load
                local.get 11
                i64.eq
                br_if 3 (;@3;)
                local.get 3
                i32.const 8
                i32.add
                local.set 3
                local.get 14
                i32.const 1
                i32.add
                local.tee 14
                local.get 5
                i32.lt_u
                br_if 0 (;@6;)
              end
            end
            local.get 8
            i32.const 1
            i32.add
            local.set 3
            local.get 11
            local.set 4
            local.get 5
            i32.const 1
            i32.add
            local.tee 5
            i32.const 16
            i32.lt_u
            br_if 0 (;@4;)
          end
          local.get 1
          i32.const 1128
          i32.store offset=88
          local.get 1
          local.get 1
          i64.load offset=144
          local.tee 11
          i64.store offset=80
          i32.const 1024
          local.get 1
          i32.const 80
          i32.add
          call $printf
          drop
          local.get 1
          i32.const 144
          i32.add
          i32.const 8
          i32.or
          local.set 3
          loop  ;; label = @4
            local.get 1
            local.get 11
            i64.store offset=64
            i32.const 1062
            local.get 1
            i32.const 64
            i32.add
            call $printf
            drop
            local.get 3
            i64.load
            local.set 11
            local.get 3
            i32.const 8
            i32.add
            local.set 3
            local.get 8
            i32.const -1
            i32.add
            local.tee 8
            br_if 0 (;@4;)
          end
          local.get 1
          local.get 11
          i64.store offset=48
          i32.const 1069
          local.get 1
          i32.const 48
          i32.add
          call $printf
          drop
          br 2 (;@1;)
        end
        local.get 1
        i32.const 1121
        i32.store offset=40
        local.get 1
        local.get 1
        i64.load offset=144
        local.tee 11
        i64.store offset=32
        i32.const 1024
        local.get 1
        i32.const 32
        i32.add
        call $printf
        drop
        local.get 1
        i32.const 144
        i32.add
        i32.const 8
        i32.or
        local.set 3
        i32.const 0
        local.set 14
        loop  ;; label = @3
          local.get 1
          local.get 11
          i64.store offset=16
          i32.const 1062
          local.get 1
          i32.const 16
          i32.add
          call $printf
          drop
          local.get 3
          i64.load
          local.set 11
          local.get 3
          i32.const 8
          i32.add
          local.set 3
          local.get 5
          local.get 14
          i32.const 1
          i32.add
          local.tee 14
          i32.ne
          br_if 0 (;@3;)
        end
        local.get 1
        local.get 11
        i64.store
        i32.const 1069
        local.get 1
        call $printf
        drop
        br 1 (;@1;)
      end
      block  ;; label = @2
        block  ;; label = @3
          local.get 11
          i64.eqz
          br_if 0 (;@3;)
          block  ;; label = @4
            local.get 5
            i32.const 1
            i32.ne
            br_if 0 (;@4;)
            i32.const 1104
            local.set 14
            local.get 11
            local.get 0
            i64.eq
            br_if 2 (;@2;)
          end
          block  ;; label = @4
            local.get 5
            i32.const 2
            i32.ne
            br_if 0 (;@4;)
            i32.const 1112
            local.set 14
            local.get 11
            local.get 0
            i64.eq
            br_if 2 (;@2;)
          end
          i32.const 1074
          i32.const 1083
          local.get 11
          local.get 0
          i64.eq
          select
          i32.const 1074
          local.get 3
          select
          local.set 14
          br 1 (;@2;)
        end
        i32.const 1092
        local.set 14
      end
      local.get 1
      local.get 14
      i32.store offset=136
      local.get 1
      local.get 1
      i64.load offset=144
      local.tee 11
      i64.store offset=128
      i32.const 1024
      local.get 1
      i32.const 128
      i32.add
      call $printf
      drop
      local.get 1
      i32.const 144
      i32.add
      i32.const 8
      i32.or
      local.set 3
      i32.const 0
      local.set 14
      loop  ;; label = @2
        local.get 1
        local.get 11
        i64.store offset=112
        i32.const 1062
        local.get 1
        i32.const 112
        i32.add
        call $printf
        drop
        local.get 3
        i64.load
        local.set 11
        local.get 3
        i32.const 8
        i32.add
        local.set 3
        local.get 5
        local.get 14
        i32.const 1
        i32.add
        local.tee 14
        i32.ne
        br_if 0 (;@2;)
      end
      local.get 1
      local.get 11
      i64.store offset=96
      i32.const 1069
      local.get 1
      i32.const 96
      i32.add
      call $printf
      drop
    end
    local.get 1
    i32.const 272
    i32.add
    global.set 0)
  (func $processFile (type 9) (param i32)
    (local i32)
    global.get 0
    i32.const 32
    i32.sub
    local.tee 1
    global.set 0
    block  ;; label = @1
      local.get 1
      i32.const 21
      local.get 0
      i32.const 1144
      call $fopen
      local.tee 0
      call $fgets
      i32.eqz
      br_if 0 (;@1;)
      loop  ;; label = @2
        local.get 1
        i32.const 0
        i32.const 10
        call $strtoull
        call $aliquotClassifier
        local.get 1
        i32.const 21
        local.get 0
        call $fgets
        br_if 0 (;@2;)
      end
    end
    local.get 0
    call $fclose
    drop
    local.get 1
    i32.const 32
    i32.add
    global.set 0)
  (func $main (type 0) (param i32 i32) (result i32)
    (local i32)
    global.get 0
    i32.const 48
    i32.sub
    local.tee 2
    global.set 0
    block  ;; label = @1
      block  ;; label = @2
        block  ;; label = @3
          local.get 0
          i32.const 2
          i32.ne
          br_if 0 (;@3;)
          local.get 1
          i32.load offset=4
          local.tee 1
          i32.const 46
          call $strchr
          i32.eqz
          br_if 1 (;@2;)
          block  ;; label = @4
            local.get 2
            i32.const 16
            i32.add
            i32.const 21
            local.get 1
            i32.const 1144
            call $fopen
            local.tee 1
            call $fgets
            i32.eqz
            br_if 0 (;@4;)
            loop  ;; label = @5
              local.get 2
              i32.const 16
              i32.add
              i32.const 0
              i32.const 10
              call $strtoull
              call $aliquotClassifier
              local.get 2
              i32.const 16
              i32.add
              i32.const 21
              local.get 1
              call $fgets
              br_if 0 (;@5;)
            end
          end
          local.get 1
          call $fclose
          drop
          br 2 (;@1;)
        end
        local.get 2
        local.get 1
        i32.load
        i32.store
        i32.const 1146
        local.get 2
        call $printf
        drop
        br 1 (;@1;)
      end
      local.get 1
      i32.const 0
      i32.const 10
      call $strtoull
      call $aliquotClassifier
    end
    local.get 2
    i32.const 48
    i32.add
    global.set 0
    i32.const 0)
  (table (;0;) 1 1 funcref)
  (memory (;0;) 2)
  (global (;0;) (mut i32) (i32.const 66720))
  (global (;1;) i32 (i32.const 66720))
  (global (;2;) i32 (i32.const 1176))
  (global (;3;) i32 (i32.const 1024))
  (export "memory" (memory 0))
  (export "__wasm_call_ctors" (func $__wasm_call_ctors))
  (export "__heap_base" (global 1))
  (export "__data_end" (global 2))
  (export "__dso_handle" (global 3))
  (export "raiseTo" (func $raiseTo))
  (export "properDivisorSum" (func $properDivisorSum))
  (export "printSeries" (func $printSeries))
  (export "aliquotClassifier" (func $aliquotClassifier))
  (export "processFile" (func $processFile))
  (export "main" (func $main))
  (data (;0;) (i32.const 1024) "\0aInteger : %llu, Type : %s, Series : \00%llu, \00%llu\00Sociable\00Aspiring\00Terminating\00Perfect\00Amicable\00Cyclic\00Non-Terminating\00r\00Usage : %s <positive integer>\00"))
