import React, { useCallback, useEffect, useRef, useState } from "react";
import { Layout } from "../../components/layout/layout";
import { apiService } from "../../utils/services/apiService";
import Resizer from "react-image-file-resizer";

const TestAPIPage = (): JSX.Element => {
  const modelRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [uploadStatus, setUploadStatus] = useState<File>();
  const [base64, setBase64] = useState<string | ArrayBuffer | null>();

  const [result, setResult] = useState<string>("");

  const [selected, setSelected] = useState<string>("get");

  const resizeFileToBase64 = useCallback(
    (file: File) =>
      new Promise((resolve) => {
        Resizer.imageFileResizer(
          file,
          275,
          275,
          "JPEG",
          100,
          0,
          (uri) => {
            resolve(uri);
          },
          "base64"
        );
      }),
    []
  );

  const handleUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setUploadStatus(e.target.files[0]);

        const image = await resizeFileToBase64(e.target.files[0]);
        const data = image as string;
        setBase64(data.replace("data:", "").replace(/^.+,/, ""));
      }
    },
    [uploadStatus, resizeFileToBase64]
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

            url = "/post";
            body = {
              model: modelRef.current.value.trim(),
              data: {
                name: nameRef.current.value.trim(),
                phone:
                  modelRef.current.value.trim().toLowerCase() ===
                    "res.partner" &&
                  phoneRef &&
                  phoneRef.current
                    ? phoneRef.current.value
                    : null,
                mobile:
                  modelRef.current.value.trim().toLowerCase() ===
                    "res.partner" &&
                  phoneRef &&
                  phoneRef.current
                    ? phoneRef.current.value
                    : null,
                email:
                  modelRef.current.value.trim().toLowerCase() ===
                    "res.partner" &&
                  emailRef &&
                  emailRef.current
                    ? emailRef.current.value
                    : null,
                image_1920:
                  modelRef.current.value.trim().toLowerCase() ===
                    "res.partner" &&
                  uploadStatus &&
                  base64
                    ? base64
                    : null,
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
              phone:
                modelRef.current.value.trim().toLowerCase() === "res.partner" &&
                phoneRef &&
                phoneRef.current
                  ? phoneRef.current.value
                  : null,
              mobile:
                modelRef.current.value.trim().toLowerCase() === "res.partner" &&
                phoneRef &&
                phoneRef.current
                  ? phoneRef.current.value
                  : null,
              email:
                modelRef.current.value.trim().toLowerCase() === "res.partner" &&
                emailRef &&
                emailRef.current
                  ? emailRef.current.value
                  : null,
              image_1920:
                modelRef.current.value.trim().toLowerCase() === "res.partner" &&
                uploadStatus &&
                base64
                  ? base64
                  : null,
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
        } else if (selected === "getAllFields") {
          url = "/getallfields";
          body = {
            model: modelRef.current.value.trim(),
          };
        } else if (selected === "getIndividuals") {
          url = "/getindividuals";
          body = {
            model: modelRef.current.value.trim(),
          };
        } else if (selected === "getCompanies") {
          url = "/getcompanies";
          body = {
            model: modelRef.current.value.trim(),
          };
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
  }, [selected, modelRef, idRef, nameRef, base64, uploadStatus]);

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
                        <option value="getAllFields">Get All Fields</option>
                        <option value="getIndividuals">Get Individuals</option>
                        <option value="getCompanies">Get Companies</option>
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
                  <label className="label">Phone number</label>
                </div>
                <div className="column">
                  <div className="control">
                    <input
                      ref={phoneRef}
                      className="input"
                      type="text"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="columns m-0">
                <div className="column is-3">
                  <label className="label">Email</label>
                </div>
                <div className="column">
                  <div className="control">
                    <input
                      ref={emailRef}
                      className="input"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="columns m-0">
                <div className="column is-3">
                  <label className="label">Image</label>
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
