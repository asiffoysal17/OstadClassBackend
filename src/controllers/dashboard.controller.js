import Blog from "../models/blog.model.js";
import Experience from "../models/experience.model.js";
import User from "../models/user.models.js";

const dashboard = async (req, res) => {
  try {
    const email = req.headers.email;
    const user = await User.aggregate([{ $match: { email } }]);

    const experienceResult = await Experience.aggregate([
      {
        $match: {
          createdAt: { $lt: new Date("2026-01-02T15:43:46.066Z") },
        },
      },
      {
        $facet: {
          total: [{ $count: "count" }],
          data: [{ $project: { _id: 0, title: 1 } }],
        },
      },
    ]);

    console.log("experienceResult: ", experienceResult);
    const backendBlogs = await Blog.aggregate([
      {
        $match: {
          category: "Backend",
        },
      },
      {
        $facet: {
          total: [{ $count: "count" }],
          data: [{ $project: { _id: 0, title: 1 } }],
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: {
        user,
        experience: {
          count: experienceResult[0]?.total[0]?.count ?? 0,
          data: experienceResult[0]?.data ?? [],
        },
        backend_blogs: {
          count: backendBlogs[0]?.total[0]?.count ?? 0,
          data: backendBlogs[0]?.data ?? [],
        },
      },
    });
  } catch (error) {}
};
export default dashboard;
