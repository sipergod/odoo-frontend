import React, { useCallback, useRef, useState } from "react";
import { Layout } from "../../components/layout/layout";

const TestAPIPage = (): JSX.Element => {
  const modelRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const [selected, setSelected] = useState<string>("get");

  const handleSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (e.target.value && e.target.value !== selected) {
        setSelected(e.target.value);
      }
    },
    [selected]
  );

  return (
    <>
      <main>
        <Layout appBarTitle="Follow-Ups" hasBottomTabBar bottomTabBarIndex={2}>
          <div className="box m-3">
            <div className="column">
              <p>Test API page</p>
            </div>

            <div className="column">
              <div className="columns m-0">
                <div className="column is-3">
                  <label className="label">Type</label>
                </div>
                <div className="column">
                  <div className="control">
                    <div className="select">
                      <select value={selected} onChange={handleSelect}>
                        <option value="get">Get</option>
                        <option value="post">Post</option>
                        <option value="put">Put</option>
                        <option value="delete">Delete</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="columns m-0">
                <div className="column is-3">
                  <label className="label">Model</label>
                </div>
                <div className="column">
                  <div className="control">
                    <input
                      ref={modelRef}
                      className="input"
                      type="text"
                      placeholder="Model ex: crm.partner"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="columns m-0">
                <div className="column is-3">
                  <label className="label">ID</label>
                </div>
                <div className="column">
                  <div className="control">
                    <input
                      ref={idRef}
                      className="input"
                      type="number"
                      placeholder="ID"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="columns m-0">
                <div className="column is-3">
                  <label className="label">Name</label>
                </div>
                <div className="column">
                  <div className="control">
                    <input
                      ref={nameRef}
                      className="input"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
              <div className="control">
                <button className="button is-link is-light">Cancel</button>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default TestAPIPage;
