import React, { useCallback, useRef, useState } from "react";
import { Layout } from "../../components/layout/layout";
import { apiService } from "../../utils/services/apiService";

const TestAPIPage = (): JSX.Element => {
  const modelRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [uploadStatus, setUploadStatus] = useState<File>();

  const [result, setResult] = useState<string>("");

  const [selected, setSelected] = useState<string>("get");

  const handleUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setUploadStatus(e.target.files[0]);
      }
    },
    [uploadStatus]
  );

  const handleSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (e.target.value && e.target.value !== selected) {
        setSelected(e.target.value);
      }
    },
    [selected]
  );

  const callAPI = useCallback(async () => {
    let url = "/";
    let body = {};
    let method = "post";

    if (modelRef && modelRef.current && modelRef.current.value !== "") {
      if (selected === "get") {
        // call get all
        url = "/get";
        body = {
          model: modelRef.current.value.trim(),
        };
      } else {
        if (selected === "post") {
          if (nameRef && nameRef.current && nameRef.current.value !== "") {
            // call post create new

            console.log(uploadStatus);
            url = "/post";
            body = {
              model: modelRef.current.value.trim(),
              data: {
                name: nameRef.current.value.trim(),
                phone: "123456789",
                mobile: "123456789",
                email: "test@test.com",
                image_1920: uploadStatus ? URL.createObjectURL(uploadStatus) : null,
              },
            };
          } else {
            setResult("Please provide name");
            return;
          }
        } else if (selected === "put") {
          if (
            idRef &&
            idRef.current &&
            idRef.current.value !== "" &&
            typeof Number(idRef.current.value) === "number"
          ) {
          } else {
            setResult("Please provide ID as number");
            return;
          }

          if (nameRef && nameRef.current && nameRef.current.value !== "") {
          } else {
            setResult("Please provide edited name");
            return;
          }

          // call post edit
          url = "/put";
          body = {
            model: modelRef.current.value.trim(),
            id: idRef.current.value.trim(),
            data: {
              name: nameRef.current.value.trim(),
            },
          };
          method = "put";
        } else if (selected === "delete") {
          if (idRef && idRef.current && idRef.current.value !== "") {
            url = "/delete";
            method = "delete";
            body = {
              model: modelRef.current.value.trim(),
              id: idRef.current.value.trim(),
            };
          } else {
            setResult("Please provide ID");
            return;
          }
        }
      }

      const data = await apiService({
        url: url,
        body: JSON.stringify(body),
        method: method,
      });
      setResult(JSON.stringify(data));
      return;
    } else {
      setResult("Please provide ID");
      return;
    }
  }, [selected, modelRef, idRef, nameRef]);

  return (
    <>
      <main>
        <Layout appBarTitle="Test API" hasBottomTabBar bottomTabBarIndex={2}>
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

            <div className="column">
              <div className="columns m-0">
                <div className="column is-3">
                  <label className="label">Name</label>
                </div>
                <div className="column">
                  <div className="control">
                    <div
                      className="file has-name is-fullwidth"
                      onChange={handleUpload}
                    >
                      <label className="file-label">
                        <input
                          className="file-input"
                          type="file"
                          name="resume"
                        />
                        <span className="file-cta">
                          <span className="file-icon">
                            <i className="fas fa-upload"></i>
                          </span>
                          <span className="file-label">Choose a file…</span>
                        </span>

                        <span className="file-name"></span>
                      </label>
                    </div>
                  </div>
                  <div className="block has-text-centered">
                    <figure className="image is-128x128 is-inline-block">
                      <img
                        className="is-rounded"
                        width={150}
                        src={
                          uploadStatus ? URL.createObjectURL(uploadStatus) : ""
                        }
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <p>Result:</p>
              <p>{result}</p>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" onClick={callAPI}>
                  Submit
                </button>
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
